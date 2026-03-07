import { NavSection } from "@/types/dashboard.types";
import { getDefaultDashboardRoute, UserRole } from "./authUtils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);
  return [
    {
      title: "Dashboard",
      items: [
        {
          title: "Home",
          href: "/",
          icon: "Home",
        },
        {
          title: "Dashboard",
          href: defaultDashboard,
          icon: "LayoutDashboard",
        },
        {
          title: "profile",
          href: "/my-profile",
          icon: "User",
        },
      ],
    },
    {
      title: "Settings",
      // icon: "Settings",
      items: [
        {
          title: "Change Password",
          href: "/change-password",
          icon: "Lock",
        },
      ],
    },
  ];
};

const getAdminNavItems: NavSection[] = [
  {
    title: "Admin Panel",
    items: [
      {
        title: "Admin Dashboard",
        href: "/admin/dashboard/stats",
        icon: "LayoutDashboard",
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "User Management",
        href: "/admin/dashboard/users-management",
        icon: "Users",
      },
      {
        title: "Roles Management",
        href: "/admin/dashboard/roles-management",
        icon: "UserRole",
      },
    ],
  },
  {
    title: "Orders Management",
    items: [
      {
        title: "Order Management",
        href: "/admin/dashboard/orders-management",
        icon: "ClipboardList",
      },
    ],
  },
  {
    title: "Category Management",
    items: [
      {
        title: "Category Management",
        href: "/admin/dashboard/category-management",
        icon: "Category",
      },
    ],
  },
];

const getProviderNavItems: NavSection[] = [
  {
    title: "Provider Panel",
    items: [
      {
        title: "Provider Dashboard",
        href: "/provider/stats",
        icon: "LayoutDashboard",
      },
    ],
  },
  {
    title: "Meal Management",
    items: [
      {
        title: "Add Meal",
        href: "/provider/add-meal",
        icon: "Plus",
      },
    ],
  },
  {
    title: "Orders Management",
    items: [
      {
        title: "Orders Management",
        href: "/provider/orders-management",
        icon: "ClipboardList",
      },
    ],
  },
];

const getCustomerNavItems: NavSection[] = [
  {
    title: "Customer Panel",
    items: [
      {
        title: "Customer Dashboard",
        href: "/dashboard/stats",
        icon: "LayoutDashboard",
      },
    ],
  },
  {
    title: "My Orders",
    items: [
      {
        title: "My Orders",
        href: "/dashboard/my-orders",
        icon: "ClipboardList",
      },
    ],
  },
  {
    title: "Reviews",
    items: [
      {
        title: "My Reviews",
        href: "/dashboard/my-reviews",
        icon: "Star",
      },
    ],
  },
];

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
  const commonItems = getCommonNavItems(role);
  switch (role) {
    case "ADMIN":
      return [...commonItems, ...getAdminNavItems];
    case "PROVIDER":
      return [...commonItems, ...getProviderNavItems];
    case "CUSTOMER":
      return [...commonItems, ...getCustomerNavItems];
  }
};
