// Product Types
export interface Material {
  id: string;
  name: string;
  category: "wood" | "board" | "hardware" | "paint" | "finish" | "prefab";
  stock: number;
  minStock: number;
  unit: string;
  cost: number;
  status: "available" | "low" | "critical";
  image?: string;
}

export interface ProductDimension {
  height: number;
  width: number;
  depth: number;
}

export interface Product {
  id: string;
  name: string;
  category: "living_table" | "night_table" | "desk" | "bookcase" | "tv_cabinet";
  price: number;
  image: string;
  description: string;
  materials: Material[];
  defaultDimensions: ProductDimension;
  isCustomizable: boolean;
  stock: number;
  colors: string[];
}

export interface CustomizationOption {
  material: string;
  color: string;
  height: number;
  width: number;
  depth: number;
  addOns?: string[];
  totalPrice: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  customization?: CustomizationOption;
  subtotal: number;
}

// User Types
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  totalSpent: number;
  orderCount: number;
  segment: "new" | "recurring" | "vip";
  lastActivity: string;
  createdAt: string;
}

export interface Distributor {
  id: string;
  companyName: string;
  contact: string;
  email: string;
  phone: string;
  city: string;
  estimatedVolume: number;
  status: "pending" | "active" | "inactive";
  discount: number;
  createdAt: string;
}

// Order Types
export type OrderStatus =
  | "new"
  | "payment_confirmed"
  | "in_production"
  | "assembled"
  | "ready_to_ship"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  orderNumber: string;
  customer?: Customer;
  distributor?: Distributor;
  items: CartItem[];
  status: OrderStatus;
  subtotal: number;
  shipping: number;
  total: number;
  createdAt: string;
  estimatedDelivery: string;
  timeline: OrderTimeline[];
  paymentMethod?: string;
  shippingAddress?: Address;
  notes?: string;
}

export interface OrderTimeline {
  status: OrderStatus;
  date: string;
  description: string;
  timestamp: string;
}

// Production Types
export type ProductionStatus =
  | "pending"
  | "materials_reserved"
  | "fabrication"
  | "assembly"
  | "quality_control"
  | "ready_to_ship";

export interface ProductionOrder {
  id: string;
  orderId: string;
  customer: string;
  product: string;
  materials: Array<{ material: string; quantity: number; unit: string }>;
  status: ProductionStatus;
  estimatedDate: string;
  assignedTo?: string;
  observations?: string;
  createdAt: string;
  timeline: Array<{
    status: ProductionStatus;
    date: string;
    notes: string;
  }>;
}

// AI Chat Types
export type ConversationChannel = "whatsapp" | "web_chat" | "contact_form";
export type ConversationStatus =
  | "new"
  | "in_progress"
  | "ai_responded"
  | "escalated_to_human"
  | "closed";

export interface ConversationMessage {
  id: string;
  from: "customer" | "ai" | "human";
  content: string;
  timestamp: string;
  metadata?: {
    productInterest?: string;
    budget?: number;
    city?: string;
    intentLevel?: "low" | "medium" | "high";
  };
}

export interface AIConversation {
  id: string;
  channel: ConversationChannel;
  customerName: string;
  customerEmail?: string;
  customerPhone?: string;
  status: ConversationStatus;
  messages: ConversationMessage[];
  detectedInfo?: {
    productInterest?: string;
    budget?: number;
    city?: string;
    intentLevel?: "low" | "medium" | "high";
  };
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

// Financial Types
export interface FinancialTransaction {
  id: string;
  type: "income" | "expense";
  category: string;
  description: string;
  amount: number;
  date: string;
  related?: {
    type: "order" | "expense";
    id: string;
  };
}

export interface FinancialSummary {
  period: string;
  income: number;
  expenses: number;
  profit: number;
  averageTicket: number;
  transactionCount: number;
}

// KPI Types
export interface KPI {
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease" | "neutral";
  icon: string;
  color: "violet" | "blue" | "green" | "orange" | "red" | "teal";
  description?: string;
}

// Report Types
export interface Report {
  title: string;
  description: string;
  generatedAt: string;
  data: any;
  exportFormat?: "pdf" | "csv" | "xlsx";
}

export interface SalesData {
  month: string;
  sales: number;
  orders: number;
}

export interface ProductSalesData {
  product: string;
  sales: number;
  margin: number;
}

// Configuration Types
export interface UserRole {
  id: string;
  name: "admin" | "sales" | "production" | "inventory" | "finance";
  permissions: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  status: "active" | "inactive";
  lastLogin?: string;
}

export interface SystemConfig {
  companyName: string;
  companyLogo?: string;
  defaultCurrency: string;
  defaultLanguage: string;
  timezone: string;
  aiAgentConfig?: {
    tone: "formal" | "friendly" | "professional";
    suggestedProducts: string[];
    escalationRules: string[];
    faqItems: Array<{ question: string; answer: string }>;
  };
  paymentMethods: string[];
  shippingMethods: Array<{
    name: string;
    baseCost: number;
    estimatedDays: number;
  }>;
}
