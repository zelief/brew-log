# Brew Log ☕

**A Domain-Driven Design (DDD) demonstration in Next.js**

Brew Log is an application designed to help home baristas and daily coffee makers log their brewing variables—such as temperature, dose, and grind size—so they can refine their coffee-making process over time. This project follows **Domain-Driven Design (DDD)** principles and serves as a demonstration of applying **DDD in a Next.js application**.

## 🚀 Features

- ✅ **Brew Method Management**: Create and manage different brew methods (e.g., Espresso, Filter).
- ⚙️ **Backend-Only for Now**: Currently, this project is focused on backend development.
- ⏳ **Planned Features**:
  - **Drink Types**: Add drink types like Cappuccino, V60, French Press, etc.
  - **Daily Coffee Journaling**: Log daily brewing variables and track improvements.

## 🏗️ Architecture & Tech Stack

This project is built using **Domain-Driven Design (DDD)** principles, ensuring separation of concerns and maintainability.

### **Layers**

- **Domain Layer**: Business logic, entities, value objects, and domain services.
- **Application Layer**: Use cases and application logic.
- **Infrastructure Layer**: Database repositories and external integrations.
- **Presentation Layer**: App routes (using Next.js Server Actions & Server Components).

### **Technologies Used**

- **Next.js** – Full-stack React framework.
- **TypeScript** – Type safety.
- **Zod** – Input validation.
- **next-safe-action** – Secure server actions.

## 📂 Project Structure

```
📦 brew-log
 ┣ 📂 src
 ┃ ┣ 📂 app            # Presentation layer (Next.js App Router, Server Actions, Server Components)
 ┃ ┣ 📂 server
 ┃ ┃ ┣ 📂 domain       # Entities, Value Objects, Repository Interfaces (pure business logic)
 ┃ ┃ ┣ 📂 application  # Use cases (interacts with domain)
 ┃ ┃ ┗ 📂 infrastructure # Repository Implementations (ORM interactions, external services)
 ┣ 📜 README.md
 ┣ 📜 package.json
 ┗ 📜 tsconfig.json
```

## 🛠️ Getting Started

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/zelief/brew-log.git
cd brew-log
```

### 2️⃣ **Install Dependencies**

```sh
bun install  # or npm install
```

### 3️⃣ **Run the Application**

```sh
bun dev  # Start Next.js development server
```

### 4️⃣ **Run the Tests**

```sh
bun test  # Run the tests
```
