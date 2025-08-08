import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import './components/EmployeeList';
import './components/EmployeeForm';
import './components/EditEmployee';
import './components/DeleteModal';
import './i18n';

@customElement('employee-app')
export class EmployeeApp extends LitElement {
  @property({ type: String })
  currentRoute: string = '/';

  @state()
  private currentLanguage: string = 'tr';

  @state()
  private showLanguageMenu: boolean = false;

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background-color: var(--ing-light-gray);
    }

    .header {
      background: var(--ing-white);
      border-bottom: 1px solid var(--ing-border);
      padding: 15px 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .header-content {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .logo:hover {
      transform: scale(1.05);
    }

    .logo-img {
      width: 40px;
      height: 40px;
      background: var(--ing-orange);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 16px;
    }

    .logo-text {
      font-size: 24px;
      font-weight: bold;
      color: var(--ing-orange);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .nav-buttons {
      display: flex;
      gap: 10px;
    }

    .nav-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border: none;
      background: transparent;
      color: var(--ing-gray);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .nav-btn:hover {
      background: var(--ing-light-gray);
      color: var(--ing-orange);
    }

    .nav-btn.active {
      background: var(--ing-orange);
      color: white;
    }

    .nav-btn-icon {
      font-size: 16px;
    }

    .language-menu {
      position: relative;
    }

    .language-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--ing-border);
      background: var(--ing-white);
      color: var(--ing-gray);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .language-toggle:hover {
      border-color: var(--ing-orange);
      color: var(--ing-orange);
    }

    .language-icon {
      font-size: 16px;
    }

    .language-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      background: var(--ing-white);
      border: 1px solid var(--ing-border);
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      min-width: 150px;
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      transition: all 0.3s ease;
    }

    .language-dropdown.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .language-option {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      border-bottom: 1px solid var(--ing-border);
    }

    .language-option:last-child {
      border-bottom: none;
    }

    .language-option:hover {
      background: var(--ing-light-gray);
    }

    .language-option.active {
      background: var(--ing-orange);
      color: white;
    }



    .language-text {
      font-size: 14px;
    }

    .main-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
    }

    .page-title {
      font-size: 18px;
      color: var(--ing-gray);
      margin: 0 0 20px 0;
      font-weight: normal;
    }

    .router-outlet {
      min-height: 400px;
    }

    /* Loading State */
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

    /* Error State */
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

    /* Responsive Design */
    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        gap: 15px;
      }

      .header-actions {
        width: 100%;
        justify-content: space-between;
      }

      .nav-buttons {
        flex: 1;
        justify-content: center;
      }

      .nav-btn {
        padding: 8px 12px;
        font-size: 12px;
      }

      .nav-btn-icon {
        font-size: 14px;
      }

      .main-content {
        padding: 10px;
      }
    }

    @media (max-width: 480px) {
      .header {
        padding: 10px 15px;
      }

      .logo-text {
        font-size: 20px;
      }

      .logo-img {
        width: 32px;
        height: 32px;
        font-size: 14px;
      }

      .nav-buttons {
        flex-direction: column;
        gap: 5px;
      }

      .nav-btn {
        width: 100%;
        justify-content: center;
      }

      .language-toggle {
        padding: 6px 10px;
        font-size: 12px;
      }

      .language-dropdown {
        min-width: 120px;
      }

      .language-option {
        padding: 10px 12px;
      }
    }

    /* Accessibility */
    .nav-btn:focus,
    .language-toggle:focus {
      outline: 2px solid var(--ing-orange);
      outline-offset: 2px;
    }

    /* Print Styles */
    @media print {
      .header {
        display: none;
      }

      .main-content {
        padding: 0;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._updateCurrentRoute();
    window.addEventListener('popstate', this._handlePopState.bind(this));
    document.addEventListener('click', this._handleClickOutside.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this._handlePopState.bind(this));
    document.removeEventListener('click', this._handleClickOutside.bind(this));
  }

  firstUpdated(changedProperties: Map<string, unknown>) {
    super.firstUpdated(changedProperties);
    this._updateCurrentRoute();
  }

  private _updateCurrentRoute() {
    this.currentRoute = window.location.pathname;
    this._renderContent();
  }

  private _navigateTo(path: string) {
    window.history.pushState({}, '', path);
    this._updateCurrentRoute();
  }

  private _handlePopState() {
    this._updateCurrentRoute();
  }

  private _renderContent() {
    const path = window.location.pathname;
    const outlet = this.shadowRoot?.getElementById('router-outlet');
    if (!outlet) return;

    // Önceki içeriği temizle
    outlet.innerHTML = '';

    if (path.startsWith('/edit/')) {
      const component = document.createElement('edit-employee');
      component.setAttribute('language', this.currentLanguage);
      component.setAttribute('employeeId', path.split('/')[2] || '');
      outlet.appendChild(component);
    } else if (path === '/add') {
      const component = document.createElement('employee-form');
      component.setAttribute('language', this.currentLanguage);
      component.addEventListener('employee-added', this._handleEmployeeAdded.bind(this) as EventListener);
      outlet.appendChild(component);
    } else {
      const component = document.createElement('employee-list');
      component.setAttribute('language', this.currentLanguage);
      component.addEventListener('edit-employee', this._handleEditEmployee.bind(this) as EventListener);
      outlet.appendChild(component);
    }
  }

  private _handleEditEmployee(e: CustomEvent) {
    const { employee } = e.detail;
    this._navigateTo(`/edit/${employee.id}`);
  }

  private _handleEmployeeAdded(e: CustomEvent) {
    const { employee } = e.detail;
    
    // Global event gönder
    window.dispatchEvent(new CustomEvent('employee-added', {
      detail: { employee }
    }));
    
    // Ana sayfaya yönlendir
    this._navigateTo('/');
  }

  private _toggleLanguageMenu(e: Event) {
    e.stopPropagation();
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  private _changeLanguage(language: string) {
    this.currentLanguage = language;
    this.showLanguageMenu = false;
    
    // i18n provider'ı güncelle
    const i18nProvider = document.querySelector('i18n-provider');
    if (i18nProvider) {
      i18nProvider.setAttribute('locale', language);
    }
    
    // Sayfa başlığını güncelle
    document.title = this._getPageTitle();
    
    // Component'leri yeniden render et
    this._renderContent();
  }

  private _handleClickOutside(e: Event) {
    const target = e.target as Element;
    if (!this.shadowRoot?.contains(target)) {
      this.showLanguageMenu = false;
    }
  }

  private _getPageTitle() {
    const path = window.location.pathname;
    const translations = {
      tr: {
        home: 'Çalışan Listesi',
        add: 'Yeni Çalışan Ekle',
        edit: 'Çalışan Düzenle'
      },
      en: {
        home: 'Employee List',
        add: 'Add New Employee',
        edit: 'Edit Employee'
      }
    };

    const t = translations[this.currentLanguage as keyof typeof translations];

    if (path.startsWith('/edit/')) {
      return `ING - ${t.edit}`;
    } else if (path === '/add') {
      return `ING - ${t.add}`;
    } else {
      return `ING - ${t.home}`;
    }
  }

  render() {
    const translations = {
      tr: {
        home: 'Ana Sayfa',
        addEmployee: 'Yeni Çalışan Ekle',
        language: 'Dil'
      },
      en: {
        home: 'Home',
        addEmployee: 'Add Employee',
        language: 'Language'
      }
    };

    const t = translations[this.currentLanguage as keyof typeof translations];

    return html`
      <div class="header">
        <div class="header-content">
          <div class="logo" @click=${() => this._navigateTo('/')}>
            <div class="logo-img">ING</div>
            <div class="logo-text">ING</div>
          </div>
          
          <div class="header-actions">
            <div class="nav-buttons">
              <div 
                class="nav-btn ${this.currentRoute === '/' ? 'active' : ''}"
                @click=${() => this._navigateTo('/')}
              >
                <div class="nav-btn-icon">🏠</div>
                ${t.home}
              </div>
              <div 
                class="nav-btn ${this.currentRoute === '/add' ? 'active' : ''}"
                @click=${() => this._navigateTo('/add')}
              >
                <div class="nav-btn-icon">➕</div>
                ${t.addEmployee}
              </div>
            </div>
            
            <div class="language-menu">
              <button 
                class="language-toggle"
                @click=${this._toggleLanguageMenu}
              >
                <div class="language-icon">🌐</div>
                ${this.currentLanguage.toUpperCase()}
              </button>
              
              ${this.showLanguageMenu ? html`
                <div class="language-dropdown show">
                  <div 
                    class="language-option ${this.currentLanguage === 'tr' ? 'active' : ''}"
                    @click=${() => this._changeLanguage('tr')}
                  >
                    <span class="language-text">TR</span>
                  </div>
                  <div 
                    class="language-option ${this.currentLanguage === 'en' ? 'active' : ''}"
                    @click=${() => this._changeLanguage('en')}
                  >
                    <span class="language-text">EN</span>
                  </div>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>

      <div class="main-content">
        <h1 class="page-title">${this._getPageTitle()}</h1>
        <div id="router-outlet" class="router-outlet"></div>
      </div>
    `;
  }
}
