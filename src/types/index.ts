export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  address: string;
}
