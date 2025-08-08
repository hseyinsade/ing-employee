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

@customElement('edit-modal')
export class EditModal extends LitElement {
  @property({ type: Boolean })
  isOpen = false;

  @property({ type: Object })
  employee: Employee | null = null;

  @property({ type: Object })
  formData: Partial<Employee> = {};

  private departments = [
    'Analytics',
    'Software Development',
    'Human Resources',
    'Marketing',
    'Sales',
    'Finance',
    'Operations',
    'Customer Service',
    'IT Support'
  ];

  private positions = [
    'Junior',
    'Senior',
    'Manager',
    'Director',
    'VP',
    'C-Level'
  ];

  static styles = css`
    :host {
      display: block;
    }

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal {
      background: var(--ing-white);
      border-radius: 8px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      max-width: 600px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      border-bottom: 1px solid var(--ing-border);
      position: sticky;
      top: 0;
      background: var(--ing-white);
      z-index: 1;
    }

    .modal-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin: 0;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
      color: var(--ing-gray);
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .close-btn:hover {
      background-color: var(--ing-light-gray);
      color: #333;
    }

    .modal-body {
      padding: 24px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group.full-width {
      grid-column: 1 / -1;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #333;
      font-size: 14px;
    }

    .form-input {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--ing-border);
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s ease;
      background: var(--ing-white);
    }

    .form-input:focus {
      outline: none;
      border-color: var(--ing-orange);
      box-shadow: 0 0 0 2px rgba(255, 98, 0, 0.25);
    }

    .form-input.error {
      border-color: #dc3545;
    }

    .error-message {
      color: #dc3545;
      font-size: 12px;
      margin-top: 4px;
    }

    .modal-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid var(--ing-border);
      position: sticky;
      bottom: 0;
      background: var(--ing-white);
    }

    .btn {
      padding: 10px 20px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid transparent;
    }

    .btn-secondary {
      background: var(--ing-white);
      border-color: var(--ing-border);
      color: var(--ing-gray);
    }

    .btn-secondary:hover {
      background-color: var(--ing-light-gray);
      border-color: var(--ing-gray);
    }

    .btn-primary {
      background: var(--ing-orange);
      color: white;
      border-color: var(--ing-orange);
    }

    .btn-primary:hover {
      background: var(--ing-dark-orange);
      border-color: var(--ing-dark-orange);
    }

    .required {
      color: #dc3545;
    }
  `;

  render() {
    if (!this.isOpen || !this.employee) {
      return html``;
    }

    return html`
      <div class="modal-overlay" @click=${this._handleOverlayClick}>
        <div class="modal" @click=${this._handleModalClick}>
          <div class="modal-header">
            <h3 class="modal-title">Edit Employee</h3>
            <button class="close-btn" @click=${this._handleClose}>&times;</button>
          </div>
          <div class="modal-body">
            <form @submit=${this._handleSubmit}>
              <div class="form-grid">
                <div class="form-group">
                  <label class="form-label" for="firstName">
                    First Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    class="form-input"
                    .value=${this.formData.firstName || this.employee.firstName}
                    @input=${this._handleInput}
                    data-field="firstName"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="lastName">
                    Last Name <span class="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    class="form-input"
                    .value=${this.formData.lastName || this.employee.lastName}
                    @input=${this._handleInput}
                    data-field="lastName"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="dateOfBirth">
                    Date of Birth <span class="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    class="form-input"
                    .value=${this.formData.dateOfBirth || this.employee.dateOfBirth}
                    @input=${this._handleInput}
                    data-field="dateOfBirth"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="phone">
                    Phone Number <span class="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    class="form-input"
                    .value=${this.formData.phone || this.employee.phone}
                    @input=${this._handleInput}
                    data-field="phone"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="dateOfEmployment">
                    Date of Employment <span class="required">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfEmployment"
                    class="form-input"
                    .value=${this.formData.dateOfEmployment || this.employee.dateOfEmployment}
                    @input=${this._handleInput}
                    data-field="dateOfEmployment"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="email">
                    Email Address <span class="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="form-input"
                    .value=${this.formData.email || this.employee.email}
                    @input=${this._handleInput}
                    data-field="email"
                    required
                  >
                </div>

                <div class="form-group">
                  <label class="form-label" for="department">
                    Department <span class="required">*</span>
                  </label>
                  <select
                    id="department"
                    class="form-input"
                    .value=${this.formData.department || this.employee.department}
                    @change=${this._handleInput}
                    data-field="department"
                    required
                  >
                    <option value="">Select Department</option>
                    ${this.departments.map(dept => html`
                      <option value="${dept}">${dept}</option>
                    `)}
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="position">
                    Position <span class="required">*</span>
                  </label>
                  <select
                    id="position"
                    class="form-input"
                    .value=${this.formData.position || this.employee.position}
                    @change=${this._handleInput}
                    data-field="position"
                    required
                  >
                    <option value="">Select Position</option>
                    ${this.positions.map(pos => html`
                      <option value="${pos}">${pos}</option>
                    `)}
                  </select>
                </div>
              </div>

              <div class="modal-actions">
                <button type="button" class="btn btn-secondary" @click=${this._handleCancel}>
                  Cancel
                </button>
                <button type="submit" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  private _handleOverlayClick(e: Event) {
    if (e.target === e.currentTarget) {
      this._handleClose();
    }
  }

  private _handleModalClick(e: Event) {
    e.stopPropagation();
  }

  private _handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const field = target.getAttribute('data-field') as keyof Employee;
    
    this.formData = {
      ...this.formData,
      [field]: target.value
    };
  }

  private _handleSubmit(e: Event) {
    e.preventDefault();
    
    const updatedEmployee = {
      ...this.employee,
      ...this.formData
    };

    this.dispatchEvent(new CustomEvent('save', {
      detail: { employee: updatedEmployee }
    }));
    this._handleClose();
  }

  private _handleClose() {
    this.dispatchEvent(new CustomEvent('close'));
  }

  private _handleCancel() {
    this._handleClose();
  }
} 