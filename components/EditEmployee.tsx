import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

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

@customElement('edit-employee')
export class EditEmployee extends LitElement {
  @property({ type: String })
  employeeId = '';

  @property({ type: String })
  language = 'tr';

  @state()
  private employee: Employee | null = null;

  @state()
  private formData: Partial<Employee> = {};

  @state()
  private errors: Partial<Employee> = {};

  @state()
  private isSubmitting = false;

  @state()
  private isSuccess = false;

  @state()
  private isLoading = true;

  private departments = ['Analytics', 'Tech'];
  private positions = ['Junior', 'Medior', 'Senior'];

  static styles = css`
    :host {
      display: block;
    }

    .edit-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    .edit-header {
      margin-bottom: 30px;
      text-align: center;
    }

    .edit-title {
      font-size: 28px;
      font-weight: bold;
      color: var(--ing-orange);
      margin: 0 0 10px 0;
    }

    .edit-subtitle {
      font-size: 16px;
      color: var(--ing-gray);
      margin: 0;
    }

    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 400px;
    }

    .loading-spinner {
      width: 48px;
      height: 48px;
      border: 4px solid var(--ing-light-gray);
      border-top: 4px solid var(--ing-orange);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .error-container {
      text-align: center;
      padding: 60px 20px;
    }

    .error-icon {
      width: 64px;
      height: 64px;
      background: #dc3545;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      color: white;
      font-size: 32px;
    }

    .error-title {
      font-size: 24px;
      font-weight: bold;
      color: #dc3545;
      margin: 0 0 10px 0;
    }

    .error-message {
      font-size: 16px;
      color: var(--ing-gray);
      margin: 0;
    }

    .form {
      background: var(--ing-white);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      padding: 30px;
    }

    .form-section {
      margin-bottom: 30px;
    }

    .section-title {
      font-size: 20px;
      font-weight: bold;
      color: var(--ing-orange);
      margin: 0 0 20px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--ing-orange);
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .form-group.full-width {
      grid-column: 1 / -1;
    }

    .form-label {
      font-size: 14px;
      font-weight: 600;
      color: var(--ing-gray);
      margin-bottom: 8px;
    }

    .form-label.required::after {
      content: ' *';
      color: #dc3545;
    }

    .form-input,
    .form-select {
      padding: 12px 15px;
      border: 1px solid var(--ing-border);
      border-radius: 4px;
      font-size: 14px;
      transition: all 0.3s ease;
      box-sizing: border-box;
      width: 100%;
    }

    .form-input:focus,
    .form-select:focus {
      outline: none;
      border-color: var(--ing-orange);
      box-shadow: 0 0 0 2px rgba(255, 98, 0, 0.1);
    }

    .form-input.error,
    .form-select.error {
      border-color: #dc3545;
      box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.1);
    }

    .form-error {
      color: #dc3545;
      font-size: 12px;
      margin-top: 5px;
    }

    .form-select {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
      background-position: right 12px center;
      background-repeat: no-repeat;
      background-size: 16px;
      padding-right: 40px;
      appearance: none;
    }

    .form-actions {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid var(--ing-border);
    }

    .form-btn {
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 120px;
    }

    .form-btn.primary {
      background: var(--ing-orange);
      color: white;
    }

    .form-btn.primary:hover {
      background: var(--ing-dark-orange);
      transform: translateY(-1px);
    }

    .form-btn.secondary {
      background: var(--ing-white);
      color: var(--ing-gray);
      border: 1px solid var(--ing-border);
    }

    .form-btn.secondary:hover {
      background: var(--ing-light-gray);
      border-color: var(--ing-orange);
    }

    .form-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .loading-spinner {
      display: inline-block;
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-right: 8px;
    }

    .success-container {
      text-align: center;
      padding: 40px 20px;
    }

    .success-icon {
      width: 64px;
      height: 64px;
      background: #28a745;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      color: white;
      font-size: 32px;
    }

    .success-title {
      font-size: 24px;
      font-weight: bold;
      color: #28a745;
      margin: 0 0 10px 0;
    }

    .success-message {
      font-size: 16px;
      color: var(--ing-gray);
      margin: 0;
    }

    @media (max-width: 768px) {
      .edit-container {
        padding: 10px;
      }

      .form {
        padding: 20px;
      }

      .form-grid {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .form-actions {
        flex-direction: column;
        gap: 10px;
      }

      .form-btn {
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .edit-title {
        font-size: 24px;
      }

      .edit-subtitle {
        font-size: 14px;
      }

      .section-title {
        font-size: 18px;
      }

      .form-input,
      .form-select {
        padding: 10px 12px;
        font-size: 16px;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._loadEmployee();
  }

  private async _loadEmployee() {
    if (!this.employeeId) {
      this.isLoading = false;
      return;
    }

    // Simüle edilmiş API çağrısı
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock employee data
    const mockEmployee: Employee = {
      id: this.employeeId,
      firstName: 'Ahmet',
      lastName: 'Yılmaz',
      dateOfEmployment: '2022-01-15',
      dateOfBirth: '1990-05-20',
      phone: '+(90) 532 123 45 67',
      email: 'ahmet.yilmaz@company.com',
      department: 'Tech',
      position: 'Senior'
    };

    this.employee = mockEmployee;
    this.formData = { ...mockEmployee };
    this.isLoading = false;
  }

  private _handleInput(e: Event) {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const field = target.name as keyof Employee;
    const value = target.value;

    this.formData = {
      ...this.formData,
      [field]: value
    };

    // Hata varsa temizle
    if (this.errors[field]) {
      this.errors = {
        ...this.errors,
        [field]: undefined
      };
    }
  }

  private _validateForm(): boolean {
    const newErrors: Partial<Employee> = {};

    if (!this.formData.firstName?.trim()) {
      newErrors.firstName = 'Ad alanı zorunludur';
    }

    if (!this.formData.lastName?.trim()) {
      newErrors.lastName = 'Soyad alanı zorunludur';
    }

    if (!this.formData.email?.trim()) {
      newErrors.email = 'E-posta alanı zorunludur';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!this.formData.phone?.trim()) {
      newErrors.phone = 'Telefon alanı zorunludur';
    }

    if (!this.formData.dateOfEmployment) {
      newErrors.dateOfEmployment = 'İşe giriş tarihi zorunludur';
    }

    if (!this.formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Doğum tarihi zorunludur';
    }

    if (!this.formData.department) {
      newErrors.department = 'Departman seçimi zorunludur';
    }

    if (!this.formData.position) {
      newErrors.position = 'Pozisyon seçimi zorunludur';
    }

    this.errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  private async _handleSubmit(e: Event) {
    e.preventDefault();

    if (!this._validateForm()) {
      return;
    }

    this.isSubmitting = true;

    // Simüle edilmiş API çağrısı
    await new Promise(resolve => setTimeout(resolve, 1000));

    this.isSuccess = true;
    this.isSubmitting = false;

    // 2 saniye sonra ana sayfaya yönlendir
    setTimeout(() => {
      window.history.back();
    }, 2000);
  }

  private _handleCancel() {
    window.history.back();
  }

  render() {
    const translations = {
      tr: {
        title: 'Çalışan Düzenle',
        subtitle: 'Çalışan bilgilerini güncelleyin',
        sectionTitle: 'Personel Bilgileri',
        firstName: 'Ad',
        lastName: 'Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        dateOfEmployment: 'İşe Giriş Tarihi',
        dateOfBirth: 'Doğum Tarihi',
        department: 'Departman',
        position: 'Pozisyon',
        submit: 'Güncelle',
        cancel: 'İptal',
        success: 'Çalışan başarıyla güncellendi!',
        loading: 'Yükleniyor...',
        error: 'Hata',
        notFound: 'Çalışan bulunamadı'
      },
      en: {
        title: 'Edit Employee',
        subtitle: 'Update employee information',
        sectionTitle: 'Employee Information',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        dateOfEmployment: 'Date of Employment',
        dateOfBirth: 'Date of Birth',
        department: 'Department',
        position: 'Position',
        submit: 'Update',
        cancel: 'Cancel',
        success: 'Employee updated successfully!',
        loading: 'Loading...',
        error: 'Error',
        notFound: 'Employee not found'
      }
    };

    const t = translations[this.language as keyof typeof translations];

    if (this.isLoading) {
      return html`
        <div class="loading-container">
          <div class="loading-spinner"></div>
        </div>
      `;
    }

    if (!this.employee) {
      return html`
        <div class="error-container">
          <div class="error-icon">❌</div>
          <h2 class="error-title">${t.error}</h2>
          <p class="error-message">${t.notFound}</p>
        </div>
      `;
    }

    if (this.isSuccess) {
      return html`
        <div class="success-container">
          <div class="success-icon">✓</div>
          <h2 class="success-title">${t.success}</h2>
          <p class="success-message">Ana sayfaya yönlendiriliyorsunuz...</p>
        </div>
      `;
    }

    return html`
      <div class="edit-container">
        <div class="edit-header">
          <h2 class="edit-title">${t.title}</h2>
          <p class="edit-subtitle">${t.subtitle}</p>
        </div>

        <form class="form" @submit=${this._handleSubmit}>
          <div class="form-section">
            <h3 class="section-title">${t.sectionTitle}</h3>
            
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label required">${t.firstName}</label>
                <input
                  type="text"
                  class="form-input ${this.errors.firstName ? 'error' : ''}"
                  name="firstName"
                  .value=${this.formData.firstName || ''}
                  @input=${this._handleInput}
                  required
                >
                ${this.errors.firstName ? html`<div class="form-error">${this.errors.firstName}</div>` : ''}
              </div>

              <div class="form-group">
                <label class="form-label required">${t.lastName}</label>
                <input
                  type="text"
                  class="form-input ${this.errors.lastName ? 'error' : ''}"
                  name="lastName"
                  .value=${this.formData.lastName || ''}
                  @input=${this._handleInput}
                  required
                >
                ${this.errors.lastName ? html`<div class="form-error">${this.errors.lastName}</div>` : ''}
              </div>

              <div class="form-group">
                <label class="form-label required">${t.email}</label>
                <input
                  type="email"
                  class="form-input ${this.errors.email ? 'error' : ''}"
                  name="email"
                  .value=${this.formData.email || ''}
                  @input=${this._handleInput}
                  required
                >
                ${this.errors.email ? html`<div class="form-error">${this.errors.email}</div>` : ''}
              </div>

              <div class="form-group">
                <label class="form-label required">${t.phone}</label>
                <input
                  type="tel"
                  class="form-input ${this.errors.phone ? 'error' : ''}"
                  name="phone"
                  .value=${this.formData.phone || ''}
                  @input=${this._handleInput}
                  required
                >
                ${this.errors.phone ? html`<div class="form-error">${this.errors.phone}</div>` : ''}
              </div>

              <div class="form-group">
                <label class="form-label required">${t.dateOfEmployment}</label>
                <input
                  type="date"
                  class="form-input ${this.errors.dateOfEmployment ? 'error' : ''}"
                  name="dateOfEmployment"
                  .value=${this.formData.dateOfEmployment || ''}
                  @input=${this._handleInput}
                  required
                >
                ${this.errors.dateOfEmployment ? html`<div class="form-error">${this.errors.dateOfEmployment}</div>` : ''}
              </div>

              <div class="form-group">
                <label class="form-label required">${t.dateOfBirth}</label>
                <input
                  type="date"
                  class="form-input ${this.errors.dateOfBirth ? 'error' : ''}"
                  name="dateOfBirth"
                  .value=${this.formData.dateOfBirth || ''}
                  @input=${this._handleInput}
                  required
                >
                ${this.errors.dateOfBirth ? html`<div class="form-error">${this.errors.dateOfBirth}</div>` : ''}
              </div>

              <div class="form-group">
                <label class="form-label required">${t.department}</label>
                <select
                  class="form-select ${this.errors.department ? 'error' : ''}"
                  name="department"
                  .value=${this.formData.department || ''}
                  @change=${this._handleInput}
                  required
                >
                  <option value="">${t.department} seçin</option>
                  ${this.departments.map(dept => html`
                    <option value="${dept}">${dept}</option>
                  `)}
                </select>
                ${this.errors.department ? html`<div class="form-error">${this.errors.department}</div>` : ''}
              </div>

              <div class="form-group">
                <label class="form-label required">${t.position}</label>
                <select
                  class="form-select ${this.errors.position ? 'error' : ''}"
                  name="position"
                  .value=${this.formData.position || ''}
                  @change=${this._handleInput}
                  required
                >
                  <option value="">${t.position} seçin</option>
                  ${this.positions.map(pos => html`
                    <option value="${pos}">${pos}</option>
                  `)}
                </select>
                ${this.errors.position ? html`<div class="form-error">${this.errors.position}</div>` : ''}
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button 
              type="button" 
              class="form-btn secondary"
              @click=${this._handleCancel}
            >
              ${t.cancel}
            </button>
            <button 
              type="submit" 
              class="form-btn primary"
              ?disabled=${this.isSubmitting}
            >
              ${this.isSubmitting ? html`
                <span class="loading-spinner"></span>
                Güncelleniyor...
              ` : t.submit}
            </button>
          </div>
        </form>
      </div>
    `;
  }
}
