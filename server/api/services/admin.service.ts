import { getCustomRepository } from "typeorm";
import FacultyRepository from "../../data/repositories/faculty.repository";
import CafedraRepository from "../../data/repositories/cafedra.repository";
import SpecialityRepository from "../../data/repositories/speciality.repository";
import GroupRepository from "../../data/repositories/group.repository";
import PersonRepository from "../../data/repositories/person.repository";
import { Sex } from "../../common/enums/Sex";
import DiplomaRepository from "../../data/repositories/diploma.repository";
import { DiplomaName } from "../../common/enums/DiplomaName";
import MarkRepository from "../../data/repositories/mark.repository";
import SFinanceRepository from "../../data/repositories/sFinance.repository";
import { FinanceName } from "../../common/enums/FinanceName";
import PaymentRepository from "../../data/repositories/payment.repository";
import ContractRepository from "../../data/repositories/contract.repository";
import SContractKindRepository from "../../data/repositories/sContractKind.repository";
import { ContractKindName } from "../../common/enums/ContractKindName";
import StudentRepository from "../../data/repositories/student.repository";
import { PayerKind } from "../../common/enums/PayerKind";
import StudentMarkRepository from "../../data/repositories/studentMark.repository";
import StudentGroupRepository from "../../data/repositories/studentGroup.repository";
import OrderKindRepository from "../../data/repositories/orderKind.repository";
import { OrderKindName } from "../../common/enums/OrderKindName";
import OrderRepository from "../../data/repositories/order.repository";
import ViolationKindRepository from "../../data/repositories/violationKind.repository";
import { ViolationKindName } from "../../common/enums/ViolationKindName";
import ViolationRepository from "../../data/repositories/violation.repository";
import PrivilegeRepository from "../../data/repositories/privilege.repository";
import { PrivilegeName } from "../../common/enums/PrivilegeName";
import PersonPrivilegeRepository from "../../data/repositories/personPrivilege.repository";
import { PrivilegeGround } from "../../common/enums/PrivilegeGround";

export const seedData = async () => {

  // SAVE FACULTIES
  await getCustomRepository(FacultyRepository).save([
    { facultyName: 'FICT' },
    { facultyName: 'IASA' },
    { facultyName: 'FAM' },
  ]);

  // SAVE CAFEDRAS
  await getCustomRepository(CafedraRepository).save([
    { cafedraShifr: 'TC', cafedraName: 'Technical Cybernetics', faculty: { id: 1 } },
    { cafedraShifr: 'AUTS', cafedraName: 'Automated systems', faculty: { id: 1 } },
    { cafedraShifr: 'FET', cafedraName: 'Math cafedra', faculty: { id: 3 } },
  ]);

  // SAVE SPECIALITIES
  await getCustomRepository(SpecialityRepository).save([
    { specialityShifr: '126', specialityName: 'Information technologies', cafedra: { id: 1 } },
    { specialityShifr: '121', specialityName: 'Programming engineering', cafedra: { id: 1 } },
  ]);

  // SAVE GROUPS
  await getCustomRepository(GroupRepository).save([
    { groupCode: 'IK-61', speciality: { id: 1 } },
    { groupCode: 'IK-62', speciality: { id: 1 } },
    { groupCode: 'IK-51', speciality: { id: 1 } },
    { groupCode: 'IK-52', speciality: { id: 1 } },
    { groupCode: 'IT-61', speciality: { id: 2 } },
    { groupCode: 'IT-62', speciality: { id: 2 } },
  ]);

  // SAVE DIPLOMAS
  await getCustomRepository(DiplomaRepository).save([
    { diplomaName: DiplomaName.Red },
    { diplomaName: DiplomaName.Usual },
  ]);

  // SAVE FINANCES
  await getCustomRepository(SFinanceRepository).save([
    { financeName: FinanceName.CHF },
    { financeName: FinanceName.EUR },
    { financeName: FinanceName.UAH },
    { financeName: FinanceName.USD },
    { financeName: FinanceName.RUB },
    { financeName: FinanceName.CZK },
    { financeName: FinanceName.XPF },
  ]);

  // SAVE PEOPLE
  await getCustomRepository(PersonRepository).save([
    { surname: 'Ivanov', name: 'Ivan', patronymic: 'Ivanovich', birthDate: new Date(1998, 4, 13), sex: Sex.Male, birthPlace: 'Odessa', address: 'street 1', telephone: '12-34-222' },
    { surname: 'Petrov', name: 'Petro', patronymic: 'Petrovich', birthDate: new Date(1995, 8, 13), sex: Sex.Male, birthPlace: 'Sumy', address: 'street 2', telephone: '12-34-100' },
    { surname: 'Gavrylova', name: 'Anna', patronymic: 'Vasylyvna', birthDate: new Date(1999, 4, 10), sex: Sex.Female, birthPlace: 'Odessa', address: 'street 1', telephone: '12-34-222' },
    { surname: 'Chubko', name: 'Olga', patronymic: 'Petrovna', birthDate: new Date(1997, 4, 13), sex: Sex.Female, birthPlace: 'Odessa', address: 'street 1', telephone: '12-34-222' },
  ]);

  // SAVE STUDENTS
  await getCustomRepository(StudentRepository).save([
    { bookNo: 'IK6227', note: 'нотатки', person: { id: 1 }, finance: { id: 1 }, diploma: { id: 1 } },
    { bookNo: 'IK6102', note: 'нотатки', person: { id: 2 }, finance: { id: 5 }, diploma: { id: 2 } },
    { bookNo: 'IK5116', person: { id: 3 }, finance: { id: 3 }, diploma: { id: 1 } },
    { bookNo: 'IK6216', person: { id: 4 }, finance: { id: 4 }, diploma: { id: 1 } },
  ]);

  // SAVE CONTRACT KINDS
  await getCustomRepository(SContractKindRepository).save([
    { contractKindName: ContractKindName.Type1 },
    { contractKindName: ContractKindName.Type2 },
    { contractKindName: ContractKindName.Type3 },
    { contractKindName: ContractKindName.Type4 },
  ]);

  // SAVE CONTRACTS
  await getCustomRepository(ContractRepository).save([
    { payerKind: PayerKind.FOP, student: { id: 1 }, contractKind: { id: 1 } },
    { payerKind: PayerKind.Physical, student: { id: 2 }, contractKind: { id: 3 } },
    { payerKind: PayerKind.TOV, student: { id: 3 }, contractKind: { id: 2 } },
    { payerKind: PayerKind.Legal, student: { id: 4 }, contractKind: { id: 4 } },
  ]);

  // SAVE PAYMENTS
  await getCustomRepository(PaymentRepository).save([
    { paymentDate: new Date(2018, 5, 5), paymentSum: 1000, documentNo: '11200', contract: { id: 1 } },
    { paymentDate: new Date(2018, 5, 6), paymentSum: 2500, documentNo: '30000', contract: { id: 2 }  },
    { paymentDate: new Date(2018, 5, .7), paymentSum: 800, documentNo: '54555', contract: { id: 3 }  },
    { paymentDate: new Date(2018, 5, 10), paymentSum: 1550, documentNo: '12122', contract: { id: 4 }  },
  ]);

  // SAVE MARKS
  await getCustomRepository(MarkRepository).save([
    { markName: 5 },
    { markName: 4 },
    { markName: 3 },
    { markName: 2 },
    { markName: 1 },
  ]);

  // SAVE STUDENT MARKS
  await getCustomRepository(StudentMarkRepository).save([
    { student: { id: 1 }, mark: { id: 2 } },
    { student: { id: 1 }, mark: { id: 1 } },
    { student: { id: 2 }, mark: { id: 4 } },
    { student: { id: 2 }, mark: { id: 1 } },
    { student: { id: 3 }, mark: { id: 3 } },
    { student: { id: 3 }, mark: { id: 2 } },
    { student: { id: 4 }, mark: { id: 5 } },
    { student: { id: 4 }, mark: { id: 1 } },
  ]);

  // SAVE STUDENT GROUPS
  await getCustomRepository(StudentGroupRepository).save([
    { student: { id: 1 }, group: { id: 2 } },
    { student: { id: 2 }, group: { id: 2 } },
    { student: { id: 3 }, group: { id: 2 } },
    { student: { id: 4 }, group: { id: 1 } },
  ]);

  // SAVE ORDER KINDS
  await getCustomRepository(OrderKindRepository).save([
    { orderKindName: OrderKindName.Drop },
    { orderKindName: OrderKindName.Money },
    { orderKindName: OrderKindName.Work },
  ]);

  // SAVE ORDERS
  await getCustomRepository(OrderRepository).save([
    { orderDate: new Date(2010, 1, 1), orderNo: '12-2000', orderText: 'негайно відрахувати', orderKind: { id: 1 } },
    { orderDate: new Date(2011, 1, 1), orderNo: '12-344', orderText: 'штраф', orderKind: { id: 2 } },
    { orderDate: new Date(2011, 1, 1), orderNo: '12-111', orderText: 'надати виправні роботи', orderKind: { id: 3 } },
  ]);

  // SAVE violation KINDS
  await getCustomRepository(ViolationKindRepository).save([
    { violationKindName: ViolationKindName.Work },
    { violationKindName: ViolationKindName.Material },
    { violationKindName: ViolationKindName.Discipline },
    { violationKindName: ViolationKindName.Legal },
  ]);

  // SAVE violations
  await getCustomRepository(ViolationRepository).save([
    { violationDate: new Date(2018, 5, 16), person: { id: 1 }, violationKind: { id: 1 }, order: { id: 1 } },
    { violationDate: new Date(2017, 5, 16), person: { id: 2 }, violationKind: { id: 2 }, order: { id: 2 } },
    { violationDate: new Date(2010, 5, 16), person: { id: 3 }, violationKind: { id: 3 }, order: { id: 2 } },
    { violationDate: new Date(2015, 5, 16), person: { id: 4 }, violationKind: { id: 4 }, order: { id: 3 } },
  ]);

  // SAVE PRIVILEGES
  await getCustomRepository(PrivilegeRepository).save([
    { privilegeName: PrivilegeName.Individual },
    { privilegeName: PrivilegeName.Social },
    { privilegeName: PrivilegeName.Zvilnennnya },
  ]);

  // SAVE person PRIVILEGES
  await getCustomRepository(PersonPrivilegeRepository).save([
    { privBeginDate: new Date(2011, 12, 10), privEndDate: new Date(2012, 1, 1), ground: PrivilegeGround.Atestat, person: { id: 1 }, privilege: { id: 1 } },
    { privBeginDate: new Date(2011, 10, 10), privEndDate: new Date(2013, 1, 1), ground: PrivilegeGround.Dovidka, person: { id: 2 }, privilege: { id: 2 } },
    { privBeginDate: new Date(2011, 1, 10), privEndDate: new Date(2012, 12, 1), ground: PrivilegeGround.Passport, person: { id: 3 }, privilege: { id: 3 } },
    { privBeginDate: new Date(2011, 2, 10), privEndDate: new Date(2012, 21, 1), ground: PrivilegeGround.Posvidchenya, person: { id: 4 }, privilege: { id: 3 } },
  ]);

}