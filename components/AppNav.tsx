import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('app-nav')
export class AppNav extends LitElement {
  @property({ type: String })
  currentView = 'list';



  render() {
    return html`
      <nav>
        <ul class="nav-list">
          <li class="nav-item">
            <a 
              href="#" 
              class="nav-link ${this.currentView === 'list' ? 'active' : ''}"
              @click=${this._handleNavClick}
              data-view="list"
            >
              Çalışan Listesi
            </a>
          </li>
          <li class="nav-item">
            <a 
              href="#" 
              class="nav-link ${this.currentView === 'form' ? 'active' : ''}"
              @click=${this._handleNavClick}
              data-view="form"
            >
              Yeni Çalışan Ekle
            </a>
          </li>
        </ul>
      </nav>
    `;
  }

  private _handleNavClick(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLElement;
    const view = target.getAttribute('data-view');
    
    if (view) {
      this.dispatchEvent(new CustomEvent('view-change', {
        detail: { view },
        bubbles: true,
        composed: true
      }));
    }
  }
}
