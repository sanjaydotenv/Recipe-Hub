import React from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Plus,
  Package,
  Users,
  Settings,
  Bell,
  Search,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  IndianRupee,
  ShoppingCart,
  Star,
  MoreHorizontal,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  CircleAlert,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹1,54,200",
      change: "+12.8%",
      positive: true,
      icon: IndianRupee,
    },
    {
      title: "Total Orders",
      value: "1,284",
      change: "+8.4%",
      positive: true,
      icon: ShoppingCart,
    },
    {
      title: "Total Products",
      value: "86",
      change: "+4.2%",
      positive: true,
      icon: Package,
    },
    {
      title: "Customers",
      value: "2,481",
      change: "-2.1%",
      positive: false,
      icon: Users,
    },
  ];

  const orders = [
    {
      id: "#ORD-1024",
      customer: "Rahul Sharma",
      product: "Peri Peri Burger",
      amount: "₹249",
      status: "Completed",
    },
    {
      id: "#ORD-1023",
      customer: "Ananya Singh",
      product: "Cheese Pizza",
      amount: "₹399",
      status: "Pending",
    },
    {
      id: "#ORD-1022",
      customer: "Vikash Patel",
      product: "Veg Sandwich",
      amount: "₹189",
      status: "Completed",
    },
    {
      id: "#ORD-1021",
      customer: "Priya Verma",
      product: "Chocolate Shake",
      amount: "₹149",
      status: "Cancelled",
    },
  ];

  const products = [
    {
      name: "Peri Peri Burger",
      category: "Burgers",
      sales: "248 sold",
      price: "₹249",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200",
    },
    {
      name: "Margherita Pizza",
      category: "Pizza",
      sales: "186 sold",
      price: "₹399",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200",
    },
    {
      name: "Veg Sandwich",
      category: "Sandwiches",
      sales: "142 sold",
      price: "₹189",
      image:
        "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=200",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8f7] text-[#151918]">
      <div className="flex min-h-screen">
        {/* ================= SIDEBAR ================= */}
        <aside className="hidden w-[245px] shrink-0 border-r border-[#e8ecea] bg-white lg:flex lg:flex-col">
          {/* Logo */}
          <div className="flex h-[82px] items-center border-b border-[#eef1ef] px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#13a854] text-xl text-white shadow-lg shadow-[#13a854]/20">
                🍴
              </div>

              <div>
                <h1 className="text-[19px] font-bold tracking-tight">Tasty</h1>
                <p className="text-[9px] font-semibold uppercase tracking-[2px] text-gray-400">
                  Seller Studio
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-4 py-7">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-gray-400">
              Main Menu
            </p>

            <nav className="space-y-1.5">
              <SidebarItem icon={LayoutDashboard} label="Dashboard" active />

              <SidebarItem icon={ShoppingBag} label="Orders" />

              <SidebarItem icon={Package} label="Products" />

              <SidebarItem icon={Plus} label="Add Product" />

              <SidebarItem icon={Users} label="Customers" />
            </nav>

            <p className="mb-3 mt-9 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-gray-400">
              Settings
            </p>

            <SidebarItem icon={Settings} label="Settings" />
          </div>

          {/* Store Card */}
          <div className="p-4">
            <div className="rounded-2xl bg-[#f3faf5] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
                  🏪
                </div>

                <span className="rounded-full bg-[#d9f7e3] px-2 py-1 text-[9px] font-bold text-[#139447]">
                  ACTIVE
                </span>
              </div>

              <p className="text-sm font-bold">System Kitchen</p>

              <p className="mt-1 text-[11px] text-gray-400">
                Your store is live
              </p>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50">
                View Store
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="min-w-0 flex-1">
          {/* Header */}
          <header className="flex h-[82px] items-center justify-between border-b border-[#e8ecea] bg-white px-5 sm:px-8">
            <div>
              <p className="text-[11px] font-medium text-gray-400">
                Wednesday, September 23
              </p>

              <h2 className="mt-0.5 text-xl font-bold tracking-tight">
                Good evening, Mayur 👋
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="hidden h-10 w-[220px] items-center gap-2 rounded-xl bg-[#f6f8f7] px-3.5 md:flex">
                <Search size={16} className="text-gray-400" />

                <input
                  placeholder="Search anything..."
                  className="w-full bg-transparent text-xs outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Notification */}
              <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition hover:bg-gray-50">
                <Bell size={17} />

                <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-[#13a854]" />
              </button>

              {/* Profile */}
              <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-1.5 pr-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d9f7e3] text-sm font-bold text-[#118c47]">
                  M
                </div>

                <div className="hidden text-left sm:block">
                  <p className="text-xs font-bold">Mayur</p>

                  <p className="text-[9px] text-gray-400">Owner</p>
                </div>

                <ChevronDown size={14} className="ml-1 text-gray-400" />
              </button>
            </div>
          </header>

          {/* Content */}
          <div className="p-5 sm:p-8">
            {/* Welcome Banner */}
            <section className="relative mb-7 overflow-hidden rounded-[24px] bg-[#10271d] p-6 text-white sm:p-7">
              <div className="relative z-10 max-w-[520px]">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-[#b5eecb] backdrop-blur">
                  STORE OVERVIEW
                </span>

                <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Your store is doing great.
                </h1>

                <p className="mt-2 max-w-[450px] text-xs leading-5 text-white/55">
                  Keep an eye on your sales, orders and products from one place.
                  Here's what's happening with your store today.
                </p>

                <button className="mt-5 flex items-center gap-2 rounded-xl bg-[#13a854] px-4 py-2.5 text-xs font-bold shadow-lg shadow-[#13a854]/20 transition hover:bg-[#0f974a]">
                  View Analytics
                  <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Decoration */}
              <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border-[35px] border-[#13a854]/15" />

              <div className="absolute -bottom-20 right-24 h-48 w-48 rounded-full bg-[#13a854]/10 blur-2xl" />

              <div className="absolute right-10 top-8 hidden text-[100px] opacity-[0.08] sm:block">
                📊
              </div>
            </section>

            {/* Stats */}
            <section className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.title}
                    className="group rounded-2xl border border-[#e8ecea] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/[0.03]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#effaf3] text-[#13a854]">
                        <Icon size={18} />
                      </div>

                      <div
                        className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold ${
                          stat.positive
                            ? "bg-[#e9f9ef] text-[#159447]"
                            : "bg-red-50 text-red-500"
                        }`}
                      >
                        {stat.positive ? (
                          <TrendingUp size={11} />
                        ) : (
                          <TrendingDown size={11} />
                        )}

                        {stat.change}
                      </div>
                    </div>

                    <p className="mt-5 text-xs font-medium text-gray-400">
                      {stat.title}
                    </p>

                    <h3 className="mt-1 text-[24px] font-bold tracking-tight">
                      {stat.value}
                    </h3>

                    <p className="mt-1 text-[10px] text-gray-400">
                      Compared to last month
                    </p>
                  </div>
                );
              })}
            </section>

            {/* Chart + Quick Actions */}
            <section className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_310px]">
              {/* Revenue Chart */}
              <div className="rounded-2xl border border-[#e8ecea] bg-white p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-bold">Revenue Overview</p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-2xl font-bold">₹42,580</span>

                      <span className="rounded-full bg-[#e9f9ef] px-2 py-1 text-[10px] font-bold text-[#159447]">
                        +18.2%
                      </span>
                    </div>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-[10px] font-semibold text-gray-500">
                    Last 7 days
                    <ChevronDown size={12} />
                  </button>
                </div>

                {/* Fake Chart */}
                <div className="relative mt-7 h-[210px]">
                  {/* Grid */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className="border-t border-dashed border-gray-100"
                      />
                    ))}
                  </div>

                  {/* Chart SVG */}
                  <svg
                    viewBox="0 0 700 210"
                    preserveAspectRatio="none"
                    className="absolute inset-0 h-full w-full"
                  >
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#13a854"
                          stopOpacity="0.22"
                        />

                        <stop
                          offset="100%"
                          stopColor="#13a854"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 165 C55 145, 65 160, 105 130 C145 100, 160 145, 200 120 C245 90, 260 125, 300 100 C340 72, 365 95, 400 75 C445 48, 470 92, 510 65 C550 40, 570 62, 610 38 C645 20, 670 38, 700 15 L700 210 L0 210 Z"
                      fill="url(#chartGradient)"
                    />

                    <path
                      d="M0 165 C55 145, 65 160, 105 130 C145 100, 160 145, 200 120 C245 90, 260 125, 300 100 C340 72, 365 95, 400 75 C445 48, 470 92, 510 65 C550 40, 570 62, 610 38 C645 20, 670 38, 700 15"
                      fill="none"
                      stroke="#13a854"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* X labels */}
                  <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[9px] text-gray-400">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-2xl border border-[#e8ecea] bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">Quick Actions</p>

                    <p className="mt-1 text-[10px] text-gray-400">
                      Manage your store
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <QuickAction
                    icon={Plus}
                    title="Add New Product"
                    description="Create a new menu item"
                  />

                  <QuickAction
                    icon={Package}
                    title="Manage Products"
                    description="Edit your food items"
                  />

                  <QuickAction
                    icon={ShoppingBag}
                    title="View Orders"
                    description="Check incoming orders"
                  />

                  <QuickAction
                    icon={Settings}
                    title="Store Settings"
                    description="Update store details"
                  />
                </div>
              </div>
            </section>

            {/* Orders + Products */}
            <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.3fr_1fr]">
              {/* Recent Orders */}
              <div className="overflow-hidden rounded-2xl border border-[#e8ecea] bg-white">
                <div className="flex items-center justify-between border-b border-gray-100 p-5">
                  <div>
                    <p className="text-sm font-bold">Recent Orders</p>

                    <p className="mt-1 text-[10px] text-gray-400">
                      Latest activity from your store
                    </p>
                  </div>

                  <button className="text-xs font-bold text-[#13a854]">
                    View all
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] text-left">
                    <thead>
                      <tr className="border-b border-gray-100 text-[10px] uppercase tracking-wider text-gray-400">
                        <th className="px-5 py-3 font-semibold">Order</th>

                        <th className="px-5 py-3 font-semibold">Customer</th>

                        <th className="px-5 py-3 font-semibold">Amount</th>

                        <th className="px-5 py-3 font-semibold">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders.map((order) => (
                        <tr
                          key={order.id}
                          className="border-b border-gray-50 last:border-0"
                        >
                          <td className="px-5 py-4">
                            <p className="text-xs font-bold">{order.id}</p>

                            <p className="mt-1 text-[10px] text-gray-400">
                              {order.product}
                            </p>
                          </td>

                          <td className="px-5 py-4 text-xs font-medium">
                            {order.customer}
                          </td>

                          <td className="px-5 py-4 text-xs font-bold">
                            {order.amount}
                          </td>

                          <td className="px-5 py-4">
                            <StatusBadge status={order.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Top Products */}
              <div className="rounded-2xl border border-[#e8ecea] bg-white">
                <div className="flex items-center justify-between border-b border-gray-100 p-5">
                  <div>
                    <p className="text-sm font-bold">Top Products</p>

                    <p className="mt-1 text-[10px] text-gray-400">
                      Your best selling items
                    </p>
                  </div>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-50">
                    <MoreHorizontal size={17} />
                  </button>
                </div>

                <div className="p-4">
                  {products.map((product, index) => (
                    <div
                      key={product.name}
                      className={`flex items-center gap-3 py-3 ${
                        index !== products.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-12 w-12 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold">
                          {product.name}
                        </p>

                        <p className="mt-1 text-[10px] text-gray-400">
                          {product.category} · {product.sales}
                        </p>

                        <div className="mt-1 flex items-center gap-1">
                          <Star
                            size={10}
                            fill="currentColor"
                            className="text-yellow-400"
                          />

                          <span className="text-[9px] font-semibold text-gray-500">
                            4.8
                          </span>
                        </div>
                      </div>

                      <p className="text-xs font-bold">{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

/* ================= COMPONENTS ================= */

const SidebarItem = ({ icon: Icon, label, active = false }) => {
  return (
    <button
      className={`group flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-xs font-semibold transition ${
        active
          ? "bg-[#eaf9ef] text-[#118c47]"
          : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
      }`}
    >
      <Icon
        size={17}
        strokeWidth={active ? 2.3 : 1.8}
        className={
          active ? "text-[#13a854]" : "text-gray-400 group-hover:text-gray-600"
        }
      />

      <span>{label}</span>

      {active && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#13a854]" />
      )}
    </button>
  );
};

const QuickAction = ({ icon: Icon, title, description }) => {
  return (
    <button className="group flex w-full items-center gap-3 rounded-xl border border-gray-100 p-3 text-left transition hover:border-[#ccefd8] hover:bg-[#f8fdf9]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#effaf3] text-[#13a854] transition group-hover:bg-[#13a854] group-hover:text-white">
        <Icon size={16} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold">{title}</p>

        <p className="mt-0.5 truncate text-[9px] text-gray-400">
          {description}
        </p>
      </div>

      <ArrowUpRight
        size={14}
        className="text-gray-300 transition group-hover:text-[#13a854]"
      />
    </button>
  );
};

const StatusBadge = ({ status }) => {
  const config = {
    Completed: {
      icon: CheckCircle2,
      className: "bg-[#eaf9ef] text-[#159447]",
    },

    Pending: {
      icon: Clock3,
      className: "bg-orange-50 text-orange-500",
    },

    Cancelled: {
      icon: CircleAlert,
      className: "bg-red-50 text-red-500",
    },
  };

  const item = config[status];
  const Icon = item.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[9px] font-bold ${item.className}`}
    >
      <Icon size={10} />
      {status}
    </span>
  );
};

export default Dashboard;
