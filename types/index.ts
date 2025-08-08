// Employee Management Application Types

/**
 * Çalışan bilgilerini temsil eden interface
 */
export interface Employee {
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

/**
 * Çalışan form verilerini temsil eden interface
 */
export interface EmployeeFormData {
  firstName: string;
  lastName: string;
  dateOfEmployment: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  department: string;
  position: string;
}

/**
 * Departman seçeneklerini temsil eden type
 */
export type Department = 'Analytics' | 'Tech' | 'Marketing' | 'Finance' | 'HR' | 'Sales' | 'Operations';

/**
 * Pozisyon seçeneklerini temsil eden type
 */
export type Position = 'Junior' | 'Medior' | 'Senior' | 'Manager' | 'Director';

/**
 * Dil seçeneklerini temsil eden type
 */
export type Language = 'tr' | 'en';

/**
 * Görünüm modlarını temsil eden type
 */
export type ViewMode = 'table' | 'grid';

/**
 * Route'ları temsil eden type
 */
export type Route = '/' | '/add' | '/edit';

/**
 * Event tiplerini temsil eden interface'ler
 */
export interface EmployeeEvent {
  employee: Employee;
}

export interface EmployeeAddedEvent {
  employee: Employee;
}

export interface EmployeeEditEvent {
  employee: Employee;
}

export interface EmployeeDeleteEvent {
  employee: Employee;
}

/**
 * Pagination bilgilerini temsil eden interface
 */
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

/**
 * Arama ve filtreleme seçeneklerini temsil eden interface
 */
export interface SearchFilters {
  searchTerm: string;
  department?: Department;
  position?: Position;
}

/**
 * Component props'larını temsil eden interface'ler
 */
export interface EmployeeListProps {
  language: Language;
  employees?: Employee[];
  searchTerm?: string;
  currentPage?: number;
  viewMode?: ViewMode;
}

export interface EmployeeFormProps {
  language: Language;
  employee?: Employee;
  isEdit?: boolean;
}

export interface EditEmployeeProps {
  language: Language;
  employeeId: string;
}

export interface DeleteModalProps {
  language: Language;
  employee?: Employee;
  employees?: Employee[];
  isMultiple?: boolean;
}

export interface I18nProviderProps {
  locale: Language;
}

/**
 * API response tiplerini temsil eden interface'ler
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface EmployeeListResponse extends ApiResponse<Employee[]> {
  pagination: PaginationInfo;
}

export interface EmployeeResponse extends ApiResponse<Employee> {}

/**
 * Form validation tiplerini temsil eden interface'ler
 */
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormValidation {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Theme ve styling tiplerini temsil eden interface'ler
 */
export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  background: string;
  surface: string;
  text: string;
  border: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
  typography: {
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      bold: number;
    };
  };
}
