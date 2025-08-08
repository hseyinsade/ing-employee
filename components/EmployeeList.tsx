import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './DeleteModal';

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  dateOfEmployment: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  department: string;
  position: string;
}

@customElement('employee-list')
export class EmployeeList extends LitElement {
  @property({ type: String })
  language = 'tr';

  @state()
  private employees: Employee[] = [
    {
      id: '1',
      firstName: 'Ahmet',
      lastName: 'Yılmaz',
      dateOfEmployment: '2023-01-15',
      dateOfBirth: '1990-05-20',
      phone: '+90 532 123 45 67',
      email: 'ahmet.yilmaz@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '2',
      firstName: 'Ayşe',
      lastName: 'Demir',
      dateOfEmployment: '2022-08-10',
      dateOfBirth: '1988-12-03',
      phone: '+90 533 234 56 78',
      email: 'ayse.demir@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '3',
      firstName: 'Mehmet',
      lastName: 'Kaya',
      dateOfEmployment: '2023-03-22',
      dateOfBirth: '1992-07-15',
      phone: '+90 534 345 67 89',
      email: 'mehmet.kaya@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '4',
      firstName: 'Fatma',
      lastName: 'Özkan',
      dateOfEmployment: '2021-11-05',
      dateOfBirth: '1985-09-28',
      phone: '+90 535 456 78 90',
      email: 'fatma.ozkan@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '5',
      firstName: 'Ali',
      lastName: 'Çelik',
      dateOfEmployment: '2023-06-18',
      dateOfBirth: '1994-03-12',
      phone: '+90 536 567 89 01',
      email: 'ali.celik@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '6',
      firstName: 'Zeynep',
      lastName: 'Arslan',
      dateOfEmployment: '2022-12-03',
      dateOfBirth: '1991-11-25',
      phone: '+90 537 678 90 12',
      email: 'zeynep.arslan@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '7',
      firstName: 'Mustafa',
      lastName: 'Koç',
      dateOfEmployment: '2023-04-14',
      dateOfBirth: '1989-02-08',
      phone: '+90 538 789 01 23',
      email: 'mustafa.koc@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '8',
      firstName: 'Elif',
      lastName: 'Şahin',
      dateOfEmployment: '2022-09-20',
      dateOfBirth: '1993-06-17',
      phone: '+90 539 890 12 34',
      email: 'elif.sahin@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '9',
      firstName: 'Hasan',
      lastName: 'Özdemir',
      dateOfEmployment: '2021-07-08',
      dateOfBirth: '1987-04-30',
      phone: '+90 540 901 23 45',
      email: 'hasan.ozdemir@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '10',
      firstName: 'Selin',
      lastName: 'Kurt',
      dateOfEmployment: '2023-02-11',
      dateOfBirth: '1995-01-14',
      phone: '+90 541 012 34 56',
      email: 'selin.kurt@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '11',
      firstName: 'Emre',
      lastName: 'Aydın',
      dateOfEmployment: '2022-05-25',
      dateOfBirth: '1990-08-22',
      phone: '+90 542 123 45 67',
      email: 'emre.aydin@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '12',
      firstName: 'Deniz',
      lastName: 'Yıldız',
      dateOfEmployment: '2023-08-30',
      dateOfBirth: '1992-12-05',
      phone: '+90 543 234 56 78',
      email: 'deniz.yildiz@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '13',
      firstName: 'Burak',
      lastName: 'Erdoğan',
      dateOfEmployment: '2021-10-12',
      dateOfBirth: '1986-03-18',
      phone: '+90 544 345 67 89',
      email: 'burak.erdogan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '14',
      firstName: 'Gizem',
      lastName: 'Çetin',
      dateOfEmployment: '2023-01-28',
      dateOfBirth: '1994-07-09',
      phone: '+90 545 456 78 90',
      email: 'gizem.cetin@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '15',
      firstName: 'Onur',
      lastName: 'Kılıç',
      dateOfEmployment: '2022-11-15',
      dateOfBirth: '1988-09-25',
      phone: '+90 546 567 89 01',
      email: 'onur.kilic@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '16',
      firstName: 'Merve',
      lastName: 'Özkan',
      dateOfEmployment: '2023-05-03',
      dateOfBirth: '1991-04-12',
      phone: '+90 547 678 90 12',
      email: 'merve.ozkan@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '17',
      firstName: 'Kaan',
      lastName: 'Demir',
      dateOfEmployment: '2022-07-19',
      dateOfBirth: '1993-11-08',
      phone: '+90 548 789 01 23',
      email: 'kaan.demir@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '18',
      firstName: 'Sude',
      lastName: 'Kaya',
      dateOfEmployment: '2021-12-07',
      dateOfBirth: '1989-06-30',
      phone: '+90 549 890 12 34',
      email: 'sude.kaya@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '19',
      firstName: 'Tolga',
      lastName: 'Arslan',
      dateOfEmployment: '2023-03-10',
      dateOfBirth: '1995-02-14',
      phone: '+90 550 901 23 45',
      email: 'tolga.arslan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '20',
      firstName: 'Ece',
      lastName: 'Koç',
      dateOfEmployment: '2022-08-25',
      dateOfBirth: '1990-10-18',
      phone: '+90 551 012 34 56',
      email: 'ece.koc@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '21',
      firstName: 'Can',
      lastName: 'Şahin',
      dateOfEmployment: '2021-09-14',
      dateOfBirth: '1987-01-22',
      phone: '+90 552 123 45 67',
      email: 'can.sahin@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '22',
      firstName: 'Yağmur',
      lastName: 'Kurt',
      dateOfEmployment: '2023-06-08',
      dateOfBirth: '1992-05-16',
      phone: '+90 553 234 56 78',
      email: 'yagmur.kurt@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '23',
      firstName: 'Berk',
      lastName: 'Aydın',
      dateOfEmployment: '2022-04-12',
      dateOfBirth: '1994-08-03',
      phone: '+90 554 345 67 89',
      email: 'berk.aydin@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '24',
      firstName: 'Defne',
      lastName: 'Yıldız',
      dateOfEmployment: '2021-11-30',
      dateOfBirth: '1986-12-09',
      phone: '+90 555 456 78 90',
      email: 'defne.yildiz@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '25',
      firstName: 'Ege',
      lastName: 'Erdoğan',
      dateOfEmployment: '2023-07-22',
      dateOfBirth: '1991-03-25',
      phone: '+90 556 567 89 01',
      email: 'ege.erdogan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '26',
      firstName: 'Leyla',
      lastName: 'Çetin',
      dateOfEmployment: '2022-10-05',
      dateOfBirth: '1993-09-11',
      phone: '+90 557 678 90 12',
      email: 'leyla.cetin@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '27',
      firstName: 'Arda',
      lastName: 'Kılıç',
      dateOfEmployment: '2021-08-18',
      dateOfBirth: '1988-04-07',
      phone: '+90 558 789 01 23',
      email: 'arda.kilic@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '28',
      firstName: 'Nehir',
      lastName: 'Özkan',
      dateOfEmployment: '2023-02-14',
      dateOfBirth: '1995-07-20',
      phone: '+90 559 890 12 34',
      email: 'nehir.ozkan@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '29',
      firstName: 'Mert',
      lastName: 'Demir',
      dateOfEmployment: '2022-12-28',
      dateOfBirth: '1990-01-13',
      phone: '+90 560 901 23 45',
      email: 'mert.demir@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '30',
      firstName: 'Ada',
      lastName: 'Kaya',
      dateOfEmployment: '2021-06-09',
      dateOfBirth: '1987-10-26',
      phone: '+90 561 012 34 56',
      email: 'ada.kaya@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '31',
      firstName: 'Kuzey',
      lastName: 'Arslan',
      dateOfEmployment: '2023-04-17',
      dateOfBirth: '1992-12-02',
      phone: '+90 562 123 45 67',
      email: 'kuzey.arslan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '32',
      firstName: 'Mina',
      lastName: 'Koç',
      dateOfEmployment: '2022-09-03',
      dateOfBirth: '1994-06-15',
      phone: '+90 563 234 56 78',
      email: 'mina.koc@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '33',
      firstName: 'Atlas',
      lastName: 'Şahin',
      dateOfEmployment: '2021-10-22',
      dateOfBirth: '1989-08-31',
      phone: '+90 564 345 67 89',
      email: 'atlas.sahin@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '34',
      firstName: 'Zara',
      lastName: 'Kurt',
      dateOfEmployment: '2023-01-05',
      dateOfBirth: '1991-05-19',
      phone: '+90 565 456 78 90',
      email: 'zara.kurt@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '35',
      firstName: 'Rüzgar',
      lastName: 'Aydın',
      dateOfEmployment: '2022-11-11',
      dateOfBirth: '1993-02-28',
      phone: '+90 566 567 89 01',
      email: 'ruzgar.aydin@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '36',
      firstName: 'Elif',
      lastName: 'Yıldız',
      dateOfEmployment: '2021-07-25',
      dateOfBirth: '1986-11-04',
      phone: '+90 567 678 90 12',
      email: 'elif.yildiz@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '37',
      firstName: 'Deniz',
      lastName: 'Erdoğan',
      dateOfEmployment: '2023-05-30',
      dateOfBirth: '1995-04-08',
      phone: '+90 568 789 01 23',
      email: 'deniz.erdogan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '38',
      firstName: 'Mira',
      lastName: 'Çetin',
      dateOfEmployment: '2022-08-14',
      dateOfBirth: '1990-09-21',
      phone: '+90 569 890 12 34',
      email: 'mira.cetin@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '39',
      firstName: 'Kaya',
      lastName: 'Kılıç',
      dateOfEmployment: '2021-12-19',
      dateOfBirth: '1987-03-16',
      phone: '+90 570 901 23 45',
      email: 'kaya.kilic@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '40',
      firstName: 'Luna',
      lastName: 'Özkan',
      dateOfEmployment: '2023-03-08',
      dateOfBirth: '1992-07-12',
      phone: '+90 571 012 34 56',
      email: 'luna.ozkan@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '41',
      firstName: 'Alp',
      lastName: 'Demir',
      dateOfEmployment: '2022-10-27',
      dateOfBirth: '1994-01-29',
      phone: '+90 572 123 45 67',
      email: 'alp.demir@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '42',
      firstName: 'Ayla',
      lastName: 'Kaya',
      dateOfEmployment: '2021-09-06',
      dateOfBirth: '1988-06-03',
      phone: '+90 573 234 56 78',
      email: 'ayla.kaya@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '43',
      firstName: 'Bora',
      lastName: 'Arslan',
      dateOfEmployment: '2023-06-12',
      dateOfBirth: '1991-10-17',
      phone: '+90 574 345 67 89',
      email: 'bora.arslan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '44',
      firstName: 'Selin',
      lastName: 'Koç',
      dateOfEmployment: '2022-12-04',
      dateOfBirth: '1993-04-25',
      phone: '+90 575 456 78 90',
      email: 'selin.koc@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '45',
      firstName: 'Eren',
      lastName: 'Şahin',
      dateOfEmployment: '2021-11-15',
      dateOfBirth: '1989-12-08',
      phone: '+90 576 567 89 01',
      email: 'eren.sahin@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '46',
      firstName: 'Zeynep',
      lastName: 'Kurt',
      dateOfEmployment: '2023-02-28',
      dateOfBirth: '1995-08-14',
      phone: '+90 577 678 90 12',
      email: 'zeynep.kurt@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '47',
      firstName: 'Kaan',
      lastName: 'Aydın',
      dateOfEmployment: '2022-07-09',
      dateOfBirth: '1990-03-31',
      phone: '+90 578 789 01 23',
      email: 'kaan.aydin@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '48',
      firstName: 'Merve',
      lastName: 'Yıldız',
      dateOfEmployment: '2021-08-23',
      dateOfBirth: '1986-05-19',
      phone: '+90 579 890 12 34',
      email: 'merve.yildiz@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '49',
      firstName: 'Emir',
      lastName: 'Erdoğan',
      dateOfEmployment: '2023-04-05',
      dateOfBirth: '1992-11-26',
      phone: '+90 580 901 23 45',
      email: 'emir.erdogan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '50',
      firstName: 'Defne',
      lastName: 'Çetin',
      dateOfEmployment: '2022-09-18',
      dateOfBirth: '1994-07-02',
      phone: '+90 581 012 34 56',
      email: 'defne.cetin@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '51',
      firstName: 'Arda',
      lastName: 'Kılıç',
      dateOfEmployment: '2021-10-30',
      dateOfBirth: '1987-01-15',
      phone: '+90 582 123 45 67',
      email: 'arda.kilic@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '52',
      firstName: 'Yağmur',
      lastName: 'Özkan',
      dateOfEmployment: '2023-01-12',
      dateOfBirth: '1991-09-08',
      phone: '+90 583 234 56 78',
      email: 'yagmur.ozkan@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '53',
      firstName: 'Berk',
      lastName: 'Demir',
      dateOfEmployment: '2022-11-25',
      dateOfBirth: '1993-06-21',
      phone: '+90 584 345 67 89',
      email: 'berk.demir@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '54',
      firstName: 'Ece',
      lastName: 'Kaya',
      dateOfEmployment: '2021-07-14',
      dateOfBirth: '1988-12-11',
      phone: '+90 585 456 78 90',
      email: 'ece.kaya@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '55',
      firstName: 'Can',
      lastName: 'Arslan',
      dateOfEmployment: '2023-03-20',
      dateOfBirth: '1995-02-28',
      phone: '+90 586 567 89 01',
      email: 'can.arslan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '56',
      firstName: 'Sude',
      lastName: 'Koç',
      dateOfEmployment: '2022-08-07',
      dateOfBirth: '1990-04-16',
      phone: '+90 587 678 90 12',
      email: 'sude.koc@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '57',
      firstName: 'Tolga',
      lastName: 'Şahin',
      dateOfEmployment: '2021-12-02',
      dateOfBirth: '1986-08-29',
      phone: '+90 588 789 01 23',
      email: 'tolga.sahin@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '58',
      firstName: 'Gizem',
      lastName: 'Kurt',
      dateOfEmployment: '2023-05-15',
      dateOfBirth: '1992-01-07',
      phone: '+90 589 890 12 34',
      email: 'gizem.kurt@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '59',
      firstName: 'Onur',
      lastName: 'Aydın',
      dateOfEmployment: '2022-10-11',
      dateOfBirth: '1994-10-23',
      phone: '+90 590 901 23 45',
      email: 'onur.aydin@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '60',
      firstName: 'Merve',
      lastName: 'Yıldız',
      dateOfEmployment: '2021-09-28',
      dateOfBirth: '1989-03-14',
      phone: '+90 591 012 34 56',
      email: 'merve.yildiz@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '61',
      firstName: 'Kaan',
      lastName: 'Erdoğan',
      dateOfEmployment: '2023-02-03',
      dateOfBirth: '1991-07-19',
      phone: '+90 592 123 45 67',
      email: 'kaan.erdogan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '62',
      firstName: 'Deniz',
      lastName: 'Çetin',
      dateOfEmployment: '2022-12-16',
      dateOfBirth: '1993-11-30',
      phone: '+90 593 234 56 78',
      email: 'deniz.cetin@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '63',
      firstName: 'Burak',
      lastName: 'Kılıç',
      dateOfEmployment: '2021-08-05',
      dateOfBirth: '1987-05-26',
      phone: '+90 594 345 67 89',
      email: 'burak.kilic@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '64',
      firstName: 'Elif',
      lastName: 'Özkan',
      dateOfEmployment: '2023-06-25',
      dateOfBirth: '1995-12-03',
      phone: '+90 595 456 78 90',
      email: 'elif.ozkan@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '65',
      firstName: 'Emre',
      lastName: 'Demir',
      dateOfEmployment: '2022-11-08',
      dateOfBirth: '1990-06-18',
      phone: '+90 596 567 89 01',
      email: 'emre.demir@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '66',
      firstName: 'Zara',
      lastName: 'Kaya',
      dateOfEmployment: '2021-10-21',
      dateOfBirth: '1988-09-05',
      phone: '+90 597 678 90 12',
      email: 'zara.kaya@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '67',
      firstName: 'Rüzgar',
      lastName: 'Arslan',
      dateOfEmployment: '2023-04-09',
      dateOfBirth: '1992-04-12',
      phone: '+90 598 789 01 23',
      email: 'ruzgar.arslan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '68',
      firstName: 'Mina',
      lastName: 'Koç',
      dateOfEmployment: '2022-09-30',
      dateOfBirth: '1994-01-28',
      phone: '+90 599 890 12 34',
      email: 'mina.koc@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '69',
      firstName: 'Atlas',
      lastName: 'Şahin',
      dateOfEmployment: '2021-11-17',
      dateOfBirth: '1986-07-31',
      phone: '+90 600 901 23 45',
      email: 'atlas.sahin@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '70',
      firstName: 'Luna',
      lastName: 'Kurt',
      dateOfEmployment: '2023-01-26',
      dateOfBirth: '1991-08-15',
      phone: '+90 601 012 34 56',
      email: 'luna.kurt@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '71',
      firstName: 'Alp',
      lastName: 'Aydın',
      dateOfEmployment: '2022-12-29',
      dateOfBirth: '1993-03-09',
      phone: '+90 602 123 45 67',
      email: 'alp.aydin@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '72',
      firstName: 'Ayla',
      lastName: 'Yıldız',
      dateOfEmployment: '2021-07-08',
      dateOfBirth: '1989-10-22',
      phone: '+90 603 234 56 78',
      email: 'ayla.yildiz@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '73',
      firstName: 'Bora',
      lastName: 'Erdoğan',
      dateOfEmployment: '2023-05-12',
      dateOfBirth: '1995-06-04',
      phone: '+90 604 345 67 89',
      email: 'bora.erdogan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '74',
      firstName: 'Selin',
      lastName: 'Çetin',
      dateOfEmployment: '2022-10-24',
      dateOfBirth: '1990-12-17',
      phone: '+90 605 456 78 90',
      email: 'selin.cetin@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '75',
      firstName: 'Eren',
      lastName: 'Kılıç',
      dateOfEmployment: '2021-09-13',
      dateOfBirth: '1987-02-28',
      phone: '+90 606 567 89 01',
      email: 'eren.kilic@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '76',
      firstName: 'Zeynep',
      lastName: 'Özkan',
      dateOfEmployment: '2023-03-01',
      dateOfBirth: '1992-11-11',
      phone: '+90 607 678 90 12',
      email: 'zeynep.ozkan@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '77',
      firstName: 'Kaan',
      lastName: 'Demir',
      dateOfEmployment: '2022-08-19',
      dateOfBirth: '1994-05-25',
      phone: '+90 608 789 01 23',
      email: 'kaan.demir@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '78',
      firstName: 'Merve',
      lastName: 'Kaya',
      dateOfEmployment: '2021-12-06',
      dateOfBirth: '1986-09-08',
      phone: '+90 609 890 12 34',
      email: 'merve.kaya@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '79',
      firstName: 'Emir',
      lastName: 'Arslan',
      dateOfEmployment: '2023-06-18',
      dateOfBirth: '1991-01-30',
      phone: '+90 610 901 23 45',
      email: 'emir.arslan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '80',
      firstName: 'Defne',
      lastName: 'Koç',
      dateOfEmployment: '2022-11-02',
      dateOfBirth: '1993-07-14',
      phone: '+90 611 012 34 56',
      email: 'defne.koc@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '81',
      firstName: 'Arda',
      lastName: 'Şahin',
      dateOfEmployment: '2021-10-09',
      dateOfBirth: '1988-04-19',
      phone: '+90 612 123 45 67',
      email: 'arda.sahin@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '82',
      firstName: 'Yağmur',
      lastName: 'Kurt',
      dateOfEmployment: '2023-02-14',
      dateOfBirth: '1995-08-26',
      phone: '+90 613 234 56 78',
      email: 'yagmur.kurt@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '83',
      firstName: 'Berk',
      lastName: 'Aydın',
      dateOfEmployment: '2022-12-21',
      dateOfBirth: '1990-03-07',
      phone: '+90 614 345 67 89',
      email: 'berk.aydin@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '84',
      firstName: 'Ece',
      lastName: 'Yıldız',
      dateOfEmployment: '2021-08-15',
      dateOfBirth: '1987-11-20',
      phone: '+90 615 456 78 90',
      email: 'ece.yildiz@company.com',
      department: 'Tech',
      position: 'Senior'
    },
    {
      id: '85',
      firstName: 'Can',
      lastName: 'Erdoğan',
      dateOfEmployment: '2023-04-28',
      dateOfBirth: '1992-06-13',
      phone: '+90 616 567 89 01',
      email: 'can.erdogan@company.com',
      department: 'Analytics',
      position: 'Medior'
    },
    {
      id: '86',
      firstName: 'Sude',
      lastName: 'Çetin',
      dateOfEmployment: '2022-09-07',
      dateOfBirth: '1994-12-01',
      phone: '+90 617 678 90 12',
      email: 'sude.cetin@company.com',
      department: 'Tech',
      position: 'Junior'
    },
    {
      id: '87',
      firstName: 'Tolga',
      lastName: 'Kılıç',
      dateOfEmployment: '2021-11-24',
      dateOfBirth: '1989-05-10',
      phone: '+90 618 789 01 23',
      email: 'tolga.kilic@company.com',
      department: 'Analytics',
      position: 'Senior'
    },
    {
      id: '88',
      firstName: 'Gizem',
      lastName: 'Özkan',
      dateOfEmployment: '2023-01-09',
      dateOfBirth: '1991-09-23',
      phone: '+90 619 890 12 34',
      email: 'gizem.ozkan@company.com',
      department: 'Tech',
      position: 'Medior'
    },
    {
      id: '89',
      firstName: 'Onur',
      lastName: 'Demir',
      dateOfEmployment: '2022-10-31',
      dateOfBirth: '1993-01-16',
      phone: '+90 620 901 23 45',
      email: 'onur.demir@company.com',
      department: 'Analytics',
      position: 'Junior'
    },
    {
      id: '90',
      firstName: 'Merve',
      lastName: 'Kaya',
      dateOfEmployment: '2021-12-12',
      dateOfBirth: '1986-08-27',
      phone: '+90 621 012 34 56',
      email: 'merve.kaya@company.com',
      department: 'Tech',
      position: 'Senior'
    }
  ];

  @state()
  private searchTerm = '';

  @state()
  private currentPage = 1;

  @state()
  private viewMode: 'table' | 'grid' = 'table';

  @state()
  private selectedEmployees: string[] = [];

  @state()
  private showDeleteModal = false;

  @state()
  private deleteModalData: { employee?: Employee; employees?: Employee[]; isMultiple: boolean } = {
    isMultiple: false
  };

  private itemsPerPage = 10;

  static styles = css`
    :host {
      display: block;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 0 10px;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
      color: var(--ing-orange);
      margin: 0;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .bulk-delete-btn {
      background: var(--ing-orange);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    .bulk-delete-btn:hover {
      background: var(--ing-dark-orange);
    }

    .view-toggles {
      display: flex;
      gap: 5px;
    }

    .view-toggle {
      background: var(--ing-white);
      border: 1px solid var(--ing-border);
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .view-toggle:hover {
      border-color: var(--ing-orange);
    }

    .view-toggle.active {
      background: var(--ing-orange);
      color: white;
      border-color: var(--ing-orange);
    }

    /* Table Styles */
    .table-container {
      overflow-x: auto;
      border-radius: 8px;
      border: 1px solid var(--ing-border);
    }

    /* Desktop'ta yatay scroll yok */
    @media (min-width: 1200px) {
      .table-container {
        overflow-x: hidden;
      }
    }

    .employee-table {
      width: 100%;
      border-collapse: collapse;
      background: var(--ing-white);
      table-layout: fixed;
    }

    .employee-table th,
    .employee-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid var(--ing-border);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* Checkbox kolonu genişliği */
    .employee-table th:nth-child(1),
    .employee-table td:nth-child(1) {
      width: 30px;
      min-width: 30px;
      max-width: 30px;
    }

    .employee-table th:nth-child(2),
    .employee-table td:nth-child(2) {
      width: 120px;
      min-width: 120px;
      max-width: 120px;
    }

    .employee-table th:nth-child(3),
    .employee-table td:nth-child(3) {
      width: 120px;
      min-width: 120px;
      max-width: 120px;
    }

    .employee-table th:nth-child(4),
    .employee-table td:nth-child(4) {
      width: 120px;
      min-width: 120px;
      max-width: 120px;
    }

    .employee-table th:nth-child(5),
    .employee-table td:nth-child(5) {
      width: 120px;
      min-width: 120px;
      max-width: 120px;
    }

    .employee-table th:nth-child(6),
    .employee-table td:nth-child(6) {
      width: 150px;
      min-width: 150px;
      max-width: 150px;
    }

    .employee-table th:nth-child(7),
    .employee-table td:nth-child(7) {
      width: 200px;
      min-width: 200px;
      max-width: 200px;
    }

    .employee-table th:nth-child(8),
    .employee-table td:nth-child(8) {
      width: 120px;
      min-width: 120px;
      max-width: 120px;
    }

    .employee-table th:nth-child(9),
    .employee-table td:nth-child(9) {
      width: 100px;
      min-width: 100px;
      max-width: 100px;
    }

    .employee-table th:nth-child(10),
    .employee-table td:nth-child(10) {
      width: 100px;
      min-width: 100px;
      max-width: 100px;
    }

    /* İkincil bilgiler için soluk görünüm */
    .employee-table td:nth-child(4),
    .employee-table td:nth-child(5),
    .employee-table td:nth-child(6),
    .employee-table td:nth-child(7),
    .employee-table td:nth-child(8),
    .employee-table td:nth-child(9) {
      opacity: 0.7;
    }

    .employee-table th {
      background: var(--ing-light-gray);
      font-weight: 600;
      color: var(--ing-orange);
      font-size: 14px;
    }

    .employee-table tr:hover {
      background: var(--ing-light-gray);
    }

    /* Mobilde sabit kolonlar */
    .employee-table th:first-child,
    .employee-table td:first-child {
      position: sticky;
      left: 0;
      background: var(--ing-white);
      z-index: 10;
      border-right: 2px solid var(--ing-border);
    }

    .employee-table th:nth-child(2),
    .employee-table td:nth-child(2) {
      position: sticky;
      left: 32px;
      background: var(--ing-white);
      z-index: 10;
      border-right: 2px solid var(--ing-border);
    }

    .employee-table th:nth-child(3),
    .employee-table td:nth-child(3) {
      position: sticky;
      left: 152px;
      background: var(--ing-white);
      z-index: 10;
      border-right: 2px solid var(--ing-border);
    }

    /* Checkbox Styles */
    .checkbox {
      width: 16px;
      height: 16px;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      accent-color: var(--ing-orange);
    }

    /* Action Buttons */
    .action-buttons {
      display: flex;
      gap: 8px;
    }

    .action-btn {
      background: none;
      border: none;
      padding: 4px;
      cursor: pointer;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .action-btn:hover {
      background: var(--ing-light-gray);
    }

    /* Grid Styles */
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }

    .employee-card {
      background: var(--ing-white);
      border: 1px solid var(--ing-border);
      border-radius: 8px;
      padding: 20px;
      transition: all 0.3s ease;
    }

    .employee-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .card-title {
      font-size: 18px;
      font-weight: bold;
      color: var(--ing-orange);
      margin: 0;
    }

    .card-checkbox {
      width: 18px;
      height: 18px;
    }

    .card-content {
      display: grid;
      gap: 8px;
    }

    .card-field {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
    }

    .card-label {
      color: var(--ing-gray);
      font-weight: 500;
    }

    .card-value {
      color: var(--ing-gray);
    }

    .card-actions {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid var(--ing-border);
    }

    .card-btn {
      background: var(--ing-orange);
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.3s ease;
      flex: 1;
      min-width: 0;
    }

    .card-btn:hover {
      background: var(--ing-dark-orange);
    }

    .card-btn.delete {
      background: #dc3545;
    }

    .card-btn.delete:hover {
      background: #c82333;
    }

    /* Search Styles */
    .search-container {
      margin-bottom: 20px;
      padding: 0 10px;
    }

    .search-input {
      width: 100%;
      max-width: 400px;
      padding: 10px 15px;
      border: 1px solid var(--ing-border);
      border-radius: 4px;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    .search-input:focus {
      outline: none;
      border-color: var(--ing-orange);
      box-shadow: 0 0 0 2px rgba(255, 98, 0, 0.1);
    }

    /* Pagination Styles */
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin-top: 30px;
      padding: 20px;
      background: var(--ing-white);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .pagination-btn {
      background: var(--ing-white);
      border: 1px solid var(--ing-border);
      padding: 10px 16px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 14px;
      font-weight: 500;
      min-width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .pagination-btn:hover {
      border-color: var(--ing-orange);
      color: var(--ing-orange);
    }

    .pagination-btn.active {
      background: var(--ing-orange);
      color: white;
      border-color: var(--ing-orange);
    }

    .pagination-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        gap: 15px;
        align-items: stretch;
      }

      .header-actions {
        justify-content: space-between;
      }

      .grid-container {
        grid-template-columns: 1fr;
      }

      .employee-table th,
      .employee-table td {
        padding: 8px;
        font-size: 12px;
      }

      .action-buttons {
        flex-direction: column;
        gap: 4px;
      }
    }

    @media (max-width: 480px) {
      .header-actions {
        flex-direction: column;
        gap: 10px;
      }

      .view-toggles {
        justify-content: center;
      }

      .pagination {
        flex-wrap: wrap;
        gap: 5px;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('employee-added', this._handleEmployeeAdded.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('employee-added', this._handleEmployeeAdded.bind(this));
  }

  private _handleEmployeeAdded(e: CustomEvent) {
    const { employee } = e.detail;
    this.employees = [...this.employees, employee];
  }

  private _handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.currentPage = 1;
  }

  private _handleViewToggle(mode: 'table' | 'grid') {
    this.viewMode = mode;
  }

  private _handlePageChange(page: number) {
    this.currentPage = page;
  }

  private _handleEditEmployee(employee: Employee) {
    this.dispatchEvent(new CustomEvent('edit-employee', {
      detail: { employee }
    }));
  }

  private _handleDeleteEmployee(employee: Employee) {
    this.deleteModalData = { employee, isMultiple: false };
    this.showDeleteModal = true;
  }

  private _handleBulkDelete() {
    if (this.selectedEmployees.length === 0) return;
    
    const selectedEmployeesList = this.employees.filter(emp => 
      this.selectedEmployees.includes(emp.id)
    );
    
    this.deleteModalData = { 
      employees: selectedEmployeesList, 
      isMultiple: true 
    };
    this.showDeleteModal = true;
  }

  /**
   * Sayfalama için gösterilecek sayfa numaralarını hesaplar
   * Mevcut sayfa, öncesi 2, sonrası 2 sayfa gösterir
   */
  private _getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    
    if (this.totalPages <= maxVisible) {
      // Show all pages if total is 5 or less
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show current page with 2 before and 2 after
      const start = Math.max(1, this.currentPage - 2);
      const end = Math.min(this.totalPages, this.currentPage + 2);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  }

  private _handleSelectAll(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      this.selectedEmployees = this.filteredEmployees.map(emp => emp.id);
    } else {
      this.selectedEmployees = [];
    }
  }

  private _handleSelectEmployee(employeeId: string, checked: boolean) {
    if (checked) {
      this.selectedEmployees = [...this.selectedEmployees, employeeId];
    } else {
      this.selectedEmployees = this.selectedEmployees.filter(id => id !== employeeId);
    }
  }

  private _handleModalClose() {
    this.showDeleteModal = false;
    this.deleteModalData = { isMultiple: false };
  }

  private _handleModalProceed(e: CustomEvent) {
    const { employee, employees, isMultiple } = e.detail;
    
    if (isMultiple && employees) {
      // Bulk delete
      const employeeIds = employees.map(emp => emp.id);
      this.employees = this.employees.filter(emp => !employeeIds.includes(emp.id));
      this.selectedEmployees = [];
    } else if (employee) {
      // Single delete
      this.employees = this.employees.filter(emp => emp.id !== employee.id);
    }
    
    this.showDeleteModal = false;
  }

  get filteredEmployees() {
    return this.employees.filter(emp => 
      emp.firstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get paginatedEmployees() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredEmployees.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }

  render() {
    const translations = {
      tr: {
        title: 'Çalışan Listesi',
        search: 'Ara...',
        bulkDelete: 'Seçilenleri Sil',
        table: 'Tablo',
        grid: 'Kart',
        firstName: 'Ad',
        lastName: 'Soyad',
        name: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        department: 'Departman',
        position: 'Pozisyon',
        dateOfEmployment: 'İşe Giriş',
        dateOfBirth: 'Doğum Tarihi',
        actions: 'İşlemler',
        edit: 'Düzenle',
        delete: 'Sil',
        noData: 'Veri bulunamadı',
        previous: 'Önceki',
        next: 'Sonraki'
      },
      en: {
        title: 'Employee List',
        search: 'Search...',
        bulkDelete: 'Delete Selected',
        table: 'Table',
        grid: 'Grid',
        firstName: 'First Name',
        lastName: 'Last Name',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        department: 'Department',
        position: 'Position',
        dateOfEmployment: 'Employment Date',
        dateOfBirth: 'Date of Birth',
        actions: 'Actions',
        edit: 'Edit',
        delete: 'Delete',
        noData: 'No data found',
        previous: 'Previous',
        next: 'Next'
      }
    };

    const t = translations[this.language as keyof typeof translations];

    return html`
      <div class="search-container">
        <input
          type="text"
          class="search-input"
          placeholder="${t.search}"
          .value=${this.searchTerm}
          @input=${this._handleSearch}
        >
      </div>

      <div class="header">
        <h2 class="title">${t.title}</h2>
        
        <div class="header-actions">
          ${this.selectedEmployees.length > 0 ? html`
            <button class="bulk-delete-btn" @click=${this._handleBulkDelete}>
              🗑️ ${t.bulkDelete} (${this.selectedEmployees.length})
            </button>
          ` : ''}
          
          <div class="view-toggles">
            <button 
              class="view-toggle ${this.viewMode === 'table' ? 'active' : ''}"
              @click=${() => this._handleViewToggle('table')}
            >
              📊 ${t.table}
            </button>
            <button 
              class="view-toggle ${this.viewMode === 'grid' ? 'active' : ''}"
              @click=${() => this._handleViewToggle('grid')}
            >
              🗂️ ${t.grid}
            </button>
          </div>
        </div>
      </div>

      ${this.viewMode === 'table' ? html`
        <div class="table-container">
          <table class="employee-table">
            <thead>
              <tr>
                <th>
                  <input 
                    type="checkbox" 
                    class="checkbox"
                    ?checked=${this.selectedEmployees.length === this.filteredEmployees.length && this.filteredEmployees.length > 0}
                    @change=${this._handleSelectAll}
                  >
                </th>
                <th>${t.firstName}</th>
                <th>${t.lastName}</th>
                <th>${t.dateOfEmployment}</th>
                <th>${t.dateOfBirth}</th>
                <th>${t.phone}</th>
                <th>${t.email}</th>
                <th>${t.department}</th>
                <th>${t.position}</th>
                <th>${t.actions}</th>
              </tr>
            </thead>
            <tbody>
              ${this.paginatedEmployees.map(employee => html`
                <tr>
                  <td>
                    <input 
                      type="checkbox" 
                      class="checkbox"
                      ?checked=${this.selectedEmployees.includes(employee.id)}
                      @change=${(e: Event) => this._handleSelectEmployee(employee.id, (e.target as HTMLInputElement).checked)}
                    >
                  </td>
                  <td>${employee.firstName}</td>
                  <td>${employee.lastName}</td>
                  <td>${new Date(employee.dateOfEmployment).toLocaleDateString()}</td>
                  <td>${new Date(employee.dateOfBirth).toLocaleDateString()}</td>
                  <td>${employee.phone}</td>
                  <td>${employee.email}</td>
                  <td>${employee.department}</td>
                  <td>${employee.position}</td>
                  <td>
                    <div class="action-buttons">
                      <button class="action-btn" @click=${() => this._handleEditEmployee(employee)} title="${t.edit}">
                        ✏️
                      </button>
                      <button class="action-btn" @click=${() => this._handleDeleteEmployee(employee)} title="${t.delete}">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      ` : html`
        <div class="grid-container">
          ${this.paginatedEmployees.map(employee => html`
            <div class="employee-card">
              <div class="card-header">
                <h3 class="card-title">${employee.firstName} ${employee.lastName}</h3>
                <input 
                  type="checkbox" 
                  class="card-checkbox"
                  ?checked=${this.selectedEmployees.includes(employee.id)}
                  @change=${(e: Event) => this._handleSelectEmployee(employee.id, (e.target as HTMLInputElement).checked)}
                >
              </div>
              
              <div class="card-content">
                <div class="card-field">
                  <span class="card-label">${t.firstName}:</span>
                  <span class="card-value">${employee.firstName}</span>
                </div>
                <div class="card-field">
                  <span class="card-label">${t.lastName}:</span>
                  <span class="card-value">${employee.lastName}</span>
                </div>
                <div class="card-field">
                  <span class="card-label">${t.dateOfEmployment}:</span>
                  <span class="card-value">${new Date(employee.dateOfEmployment).toLocaleDateString()}</span>
                </div>
                <div class="card-field">
                  <span class="card-label">${t.dateOfBirth}:</span>
                  <span class="card-value">${new Date(employee.dateOfBirth).toLocaleDateString()}</span>
                </div>
                <div class="card-field">
                  <span class="card-label">${t.phone}:</span>
                  <span class="card-value">${employee.phone}</span>
                </div>
                <div class="card-field">
                  <span class="card-label">${t.email}:</span>
                  <span class="card-value">${employee.email}</span>
                </div>
                <div class="card-field">
                  <span class="card-label">${t.department}:</span>
                  <span class="card-value">${employee.department}</span>
                </div>
                <div class="card-field">
                  <span class="card-label">${t.position}:</span>
                  <span class="card-value">${employee.position}</span>
                </div>
              </div>
              
              <div class="card-actions">
                <button class="card-btn" @click=${() => this._handleEditEmployee(employee)}>
                  ✏️ ${t.edit}
                </button>
                <button class="card-btn delete" @click=${() => this._handleDeleteEmployee(employee)}>
                  🗑️ ${t.delete}
                </button>
              </div>
            </div>
          `)}
        </div>
      `}

      ${this.totalPages > 1 ? html`
        <div class="pagination">
          <button 
            class="pagination-btn"
            ?disabled=${this.currentPage === 1}
            @click=${() => this._handlePageChange(this.currentPage - 1)}
          >
            ←
          </button>
          
          ${this._getPageNumbers().map(pageNum => html`
            <button 
              class="pagination-btn ${pageNum === this.currentPage ? 'active' : ''}"
              @click=${() => this._handlePageChange(pageNum)}
            >
              ${pageNum}
            </button>
          `)}
          
          ${this.totalPages > 5 ? html`
            <span style="margin: 0 8px; color: var(--ing-gray);">...</span>
            <button 
              class="pagination-btn"
              @click=${() => this._handlePageChange(this.totalPages)}
            >
              ${this.totalPages}
            </button>
          ` : ''}
          
          <button 
            class="pagination-btn"
            ?disabled=${this.currentPage === this.totalPages}
            @click=${() => this._handlePageChange(this.currentPage + 1)}
          >
            →
          </button>
        </div>
      ` : ''}

      ${this.filteredEmployees.length === 0 ? html`
        <div style="text-align: center; padding: 40px; color: var(--ing-gray);">
          ${t.noData}
        </div>
      ` : ''}

      <delete-modal
        ?isOpen=${this.showDeleteModal}
        .employee=${this.deleteModalData.employee}
        .employees=${this.deleteModalData.employees}
        .isMultiple=${this.deleteModalData.isMultiple}
        .language=${this.language}
        @modal-close=${this._handleModalClose}
        @modal-proceed=${this._handleModalProceed}
      ></delete-modal>
    `;
  }
}
