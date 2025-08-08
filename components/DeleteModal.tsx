import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

@customElement('delete-modal')
export class DeleteModal extends LitElement {
  @property({ type: Boolean })
  isOpen = false;

  @property({ type: Object })
  employee?: Employee;

  @property({ type: Array })
  employees?: Employee[];

  @property({ type: Boolean })
  isMultiple = false;

  @property({ type: String })
  language = 'tr';

  static styles = css`
    :host {
      display: block;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .modal-overlay.show {
      opacity: 1;
      visibility: visible;
    }

    .modal {
      background: var(--ing-white);
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
      transform: scale(0.9);
      transition: all 0.3s ease;
    }

    .modal-overlay.show .modal {
      transform: scale(1);
    }

    .modal-header {
      padding: 20px 24px 0;
      border-bottom: 1px solid var(--ing-border);
    }

    .modal-title {
      font-size: 20px;
      font-weight: bold;
      color: #dc3545;
      margin: 0 0 8px 0;
    }

    .modal-subtitle {
      font-size: 14px;
      color: var(--ing-gray);
      margin: 0 0 20px 0;
    }

    .modal-body {
      padding: 20px 24px;
    }

    .modal-message {
      font-size: 16px;
      color: var(--ing-gray);
      margin: 0 0 20px 0;
      line-height: 1.5;
    }

    .employee-info {
      background: var(--ing-light-gray);
      border-radius: 6px;
      padding: 16px;
      margin: 16px 0;
    }

    .employee-name {
      font-size: 18px;
      font-weight: bold;
      color: var(--ing-orange);
      margin: 0 0 8px 0;
    }

    .employee-details {
      font-size: 14px;
      color: var(--ing-gray);
      margin: 0;
    }

    .employee-list {
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid var(--ing-border);
      border-radius: 6px;
      margin: 16px 0;
    }

    .employee-item {
      padding: 12px 16px;
      border-bottom: 1px solid var(--ing-border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .employee-item:last-child {
      border-bottom: none;
    }

    .employee-item-name {
      font-weight: 600;
      color: var(--ing-gray);
    }

    .employee-item-department {
      font-size: 12px;
      color: var(--ing-gray);
    }

    .modal-footer {
      padding: 0 24px 20px;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }

    .modal-btn {
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 100px;
    }

    .modal-btn.secondary {
      background: var(--ing-white);
      color: var(--ing-gray);
      border: 1px solid var(--ing-border);
    }

    .modal-btn.secondary:hover {
      background: var(--ing-light-gray);
      border-color: var(--ing-orange);
    }

    .modal-btn.danger {
      background: #dc3545;
      color: white;
    }

    .modal-btn.danger:hover {
      background: #c82333;
      transform: translateY(-1px);
    }

    .modal-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    /* Loading State */
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

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .modal {
        width: 95%;
        margin: 20px;
      }

      .modal-header,
      .modal-body,
      .modal-footer {
        padding: 16px 20px;
      }

      .modal-footer {
        flex-direction: column;
        gap: 8px;
      }

      .modal-btn {
        width: 100%;
      }
    }

    @media (max-width: 480px) {
      .modal-title {
        font-size: 18px;
      }

      .modal-message {
        font-size: 14px;
      }

      .employee-name {
        font-size: 16px;
      }

      .employee-details {
        font-size: 12px;
      }
    }

    /* Accessibility */
    .modal-overlay:focus {
      outline: none;
    }

    .modal-btn:focus {
      outline: 2px solid var(--ing-orange);
      outline-offset: 2px;
    }

    /* Print Styles */
    @media print {
      .modal-overlay {
        position: static;
        background: none;
      }

      .modal {
        box-shadow: none;
        border: 1px solid #ccc;
      }
    }
  `;

  private _handleClose() {
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  private _handleProceed() {
    if (this.isMultiple && this.employees) {
      this.dispatchEvent(new CustomEvent('modal-proceed', {
        detail: { employees: this.employees, isMultiple: true }
      }));
    } else if (this.employee) {
      this.dispatchEvent(new CustomEvent('modal-proceed', {
        detail: { employee: this.employee, isMultiple: false }
      }));
    }
  }

  render() {
    const translations = {
      tr: {
        title: 'Çalışan Sil',
        subtitle: 'Bu işlem geri alınamaz',
        message: 'Bu çalışanı silmek istediğinizden emin misiniz?',
        multipleMessage: 'Seçilen çalışanları silmek istediğinizden emin misiniz?',
        cancel: 'İptal',
        delete: 'Sil',
        deleting: 'Siliniyor...',
        employee: 'Çalışan',
        department: 'Departman',
        position: 'Pozisyon',
        email: 'E-posta'
      },
      en: {
        title: 'Delete Employee',
        subtitle: 'This action cannot be undone',
        message: 'Are you sure you want to delete this employee?',
        multipleMessage: 'Are you sure you want to delete the selected employees?',
        cancel: 'Cancel',
        delete: 'Delete',
        deleting: 'Deleting...',
        employee: 'Employee',
        department: 'Department',
        position: 'Position',
        email: 'Email'
      }
    };

    const t = translations[this.language as keyof typeof translations];

    if (!this.isOpen) {
      return html``;
    }

    return html`
      <div class="modal-overlay show" @click=${this._handleClose}>
        <div class="modal" @click=${(e: Event) => e.stopPropagation()}>
          <div class="modal-header">
            <h3 class="modal-title">${t.title}</h3>
            <p class="modal-subtitle">${t.subtitle}</p>
          </div>

          <div class="modal-body">
            <p class="modal-message">
              ${this.isMultiple ? t.multipleMessage : t.message}
            </p>

            ${this.isMultiple && this.employees ? html`
              <div class="employee-list">
                ${this.employees.map(emp => html`
                  <div class="employee-item">
                    <div>
                      <div class="employee-item-name">${emp.firstName} ${emp.lastName}</div>
                      <div class="employee-item-department">${emp.department} - ${emp.position}</div>
                    </div>
                  </div>
                `)}
              </div>
            ` : this.employee ? html`
              <div class="employee-info">
                <div class="employee-name">${this.employee.firstName} ${this.employee.lastName}</div>
                <div class="employee-details">
                  ${t.department}: ${this.employee.department} | ${t.position}: ${this.employee.position}<br>
                  ${t.email}: ${this.employee.email}
                </div>
              </div>
            ` : ''}
          </div>

          <div class="modal-footer">
            <button 
              type="button" 
              class="modal-btn secondary"
              @click=${this._handleClose}
            >
              ${t.cancel}
            </button>
            <button 
              type="button" 
              class="modal-btn danger"
              @click=${this._handleProceed}
            >
              ${t.delete}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
