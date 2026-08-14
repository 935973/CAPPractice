# CAP Project Structure

## Overview

```
CAP_04/
├── package.json          # Project metadata & dependencies
├── app/                  # UI layer (Fiori/UI5 apps)
├── db/                   # Database layer
│   ├── schema.cds        # Data model definitions (entities, types)
│   └── data/             # CSV files for initial/mock data
└── srv/                  # Service layer
    ├── service.cds       # Service definitions (entities exposed, actions, functions)
    └── service.js        # Custom business logic (event handlers)
```

---

## 📦 package.json

Defines project dependencies (`@sap/cds`, `@cap-js/sqlite`, etc.) and scripts like `cds watch` / `cds-serve`.

---

## 🗄️ db/ — Database Layer

- **`schema.cds`** — defines your **data model** (entities = tables)

```cds
entity Products {
    key ID   : Integer;
    name     : String;
    price    : Decimal;
}
```

---

## ⚙️ srv/ — Service Layer

- **`service.cds`** — exposes entities and defines **actions/functions**

```cds
service product {
    entity Products as projection on db.Products;
    function helloworld(input: String) returns String;
}
```

- **`service.js`** — custom logic using **event handlers**

```js
srv.on('helloworld', req => { ... })   // function handler
srv.before('CREATE', 'Products', ...)  // lifecycle hook
srv.after('READ', 'Products', ...)     // post-processing
```

---

## 🖥️ app/ — UI Layer

Contains **SAP Fiori / UI5** frontend apps that consume the OData service exposed by `srv/`.

---

## 🔑 Key Concepts

| Concept    | Description                                      |
|------------|--------------------------------------------------|
| **CDS**    | Core Data Services — the modeling language       |
| **OData**  | Protocol CAP uses to expose services             |
| **Actions**| Modify data, called with `POST`                  |
| **Functions** | Read-only, called with `GET`                  |
| **Hooks**  | `before`, `on`, `after` for lifecycle events     |

---

## 🚀 Running the Project

When you run `cds watch`, CAP automatically:

1. Compiles `.cds` files
2. Deploys the schema to an in-memory SQLite DB
3. Serves the OData API at `http://localhost:4004`
