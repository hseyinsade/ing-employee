import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

@customElement('i18n-provider')
export class I18nProvider extends LitElement {
  @property({ type: String })
  locale = 'tr';

  @property({ type: Object })
  translations: Translations = {
    tr: {
      'employee.list.title': 'Çalışan Listesi',
      'employee.add.title': 'Yeni Çalışan Ekle',
      'employee.name': 'Ad Soyad',
      'employee.email': 'E-posta',
      'employee.department': 'Departman',
      'employee.position': 'Pozisyon',
      'employee.salary': 'Maaş',
      'employee.hireDate': 'İşe Başlama Tarihi',
      'employee.search.placeholder': 'Çalışan ara...',
      'employee.add.success': 'Çalışan başarıyla eklendi!',
      'employee.add.submit': 'Çalışan Ekle',
      'employee.add.submitting': 'Ekleniyor...',
      'employee.add.reset': 'Yeni Çalışan Ekle',
      'nav.employee.list': 'Çalışan Listesi',
      'nav.employee.add': 'Yeni Çalışan Ekle',
      'form.required': 'gereklidir',
      'form.email.invalid': 'Geçerli bir e-posta adresi girin',
      'form.salary.invalid': 'Maaş 0\'dan büyük olmalıdır',
      'form.department.select': 'Departman seçin',
      'common.empty.state': 'Henüz çalışan bulunmuyor.',
      'common.search.no.results': 'Arama kriterlerine uygun çalışan bulunamadı.'
    },
    en: {
      'employee.list.title': 'Employee List',
      'employee.add.title': 'Add New Employee',
      'employee.name': 'Full Name',
      'employee.email': 'Email',
      'employee.department': 'Department',
      'employee.position': 'Position',
      'employee.salary': 'Salary',
      'employee.hireDate': 'Hire Date',
      'employee.search.placeholder': 'Search employees...',
      'employee.add.success': 'Employee added successfully!',
      'employee.add.submit': 'Add Employee',
      'employee.add.submitting': 'Adding...',
      'employee.add.reset': 'Add New Employee',
      'nav.employee.list': 'Employee List',
      'nav.employee.add': 'Add New Employee',
      'form.required': 'is required',
      'form.email.invalid': 'Please enter a valid email address',
      'form.salary.invalid': 'Salary must be greater than 0',
      'form.department.select': 'Select department',
      'common.empty.state': 'No employees found yet.',
      'common.search.no.results': 'No employees found matching search criteria.'
    }
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }

  t(key: string): string {
    return this.translations[this.locale]?.[key] || key;
  }

  setLocale(locale: string) {
    this.locale = locale;
  }
}

// Global i18n instance
export const i18n = new I18nProvider(); 