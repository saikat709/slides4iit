# Flamebase — Project Documentation & Presentation Specification

## 1. Project Overview & Identity
* **Project Name:** Flamebase
* **Tagline:** Open-source, faster Firebase alternative
* **Description:** An open-source, self-hosted, faster, and optimized Firebase alternative built in Rust.
* **GitHub Repository:** `https://github.com/flamebase-org/flamebase`
* **License:** Apache-2.0
* **Current Project Status:** Early scaffold stage (Phase 1 of a 6-phase roadmap is complete).
* **Project Team & Supervision:**
  * **Developers:** Md. Saikat Islam, Md. Afif Hasan
  * **Project Supervisor:** Mridha Md. Nafis Fuad

---

## 2. Background: What is Firebase? (Introductory Context)
Before introducing Flamebase, the presentation establishes what Firebase is using a visual architecture diagram:
* **How Firebase Works:** An application connects via the Firebase SDK to Google-hosted backend services—specifically **Authentication, Database, Storage, and Functions**—each handling core backend infrastructure.
* **The Flamebase Shift:** Flamebase mirrors this exact architecture so existing Firebase apps can switch to self-hosted Flamebase servers simply by changing their endpoints.

---

## 3. Motivation & Problem Statement

### Important Framing Rule
* Do **not** claim actual Firebase is slow or RAM-heavy (since actual Firebase is fast and its exact RAM footprint isn't benchmarked here).
* Frame speed and RAM optimization strictly as **design goals** achieved by building Flamebase in Rust.

### Core Problems with Firebase
1. **No Data or Infrastructure Control:** Users cannot self-host, inspect, or modify the proprietary backend.
2. **Per-Query Pricing:** Costs scale unpredictably with every database read, write, and API request.
3. **Vendor Lock-In:** Complete dependency on a single proprietary cloud provider.

---

## 4. Proposed Solution
* **Open-Source & Self-Hosted:** Full ownership and control over server infrastructure and user data.
* **Drop-In Firebase SDK Compatibility:** Complete compatibility with the standard Firebase SDK; `flamebase-js-sdk` is forked directly from `firebase-js-sdk` with only a few lines modified, meaning the Flamebase backend is also compatible with actual Firebase client code.
* **Performance & Efficiency Goals:** Built in Rust to target faster response times and optimized RAM usage.
* **Predictable Cost:** Eliminates per-query billing—your only expense is your own server hosting cost.
* **One-Command Deployment:** The entire stack installs and configures with a single command.

---

## 5. Key Features (The Four Core Services & Ports)

1. **Flamebase Authentication** *(Port `9099`)*
   * Currently supports **Mobile/Email + Password** authentication and **Google Authentication** (repo scaffold also references anonymous and custom tokens).
2. **Flamebase Database** *(Port `8080`)*
   * Document/JSON data store powered by **redb** (replacing Firestore).
3. **Flamebase Functions** *(Port `5001`)*
   * Executes custom server-side user functions via a Node.js worker runtime.
4. **Flamebase Storage** *(Port `9199`)*
   * Self-hosted file and asset storage.
5. **Management Console / Dashboard** *(Port `4000`)*
   * Web UI for managing users and all four services.

---

## 6. Stakeholders & Target Users

### Approved Stakeholders List (5 Groups)
1. **Frontend and Mobile Developers:** Primary consumers of the client SDK across web, Android, and iOS apps.
2. **Backend Developers:** Write server-side Functions and manage application data models.
3. **DevOps Team:** Installs, deploys, and configures Flamebase instances using the one-command installer.
4. **Project Administrator:** Manages users, permissions, and services via the Angular management dashboard.
5. **End Users:** People using the applications built on top of Flamebase.

*(Note: University, open-source contributors, and project supervisor were explicitly excluded from the stakeholder list slide, though the supervisor remains credited on the Cover slide.)*

### Target Users
* **Startups and Small Teams:** Looking to reduce and stabilize backend infrastructure costs.
* **Student and Independent Developers:** Needing an accessible, self-hosted backend without cloud billing surprises.
* **Organizations & Institutions:** Requiring strict data residency and full ownership of data on their own servers.

---

## 7. Technologies, Tools & Architectural Stack

| Layer | Technology / Tool | Role & Justification |
| :--- | :--- | :--- |
| **Backend Services** | **Rust + Axum** | High speed, memory safety, and zero garbage collector overhead. |
| **Database Engine** | **redb** | Embedded, ACID-compliant, pure-Rust key-value store; natively handles JSON data without requiring a separate database server. |
| **Client SDK** | **flamebase-js-sdk (TypeScript/JS)** | Forked from `firebase-js-sdk` (currently JS SDK only) for drop-in compatibility. |
| **Management Dashboard** | **TypeScript + Angular** | Administrative web console to manage users and all four services. |
| **Functions Runtime** | **Node.js Worker** | Executes serverless user functions. |
| **Deployment & Packaging** | **Docker, Docker Compose & Custom Installer** | Enables single-command installation and deployment of the entire stack. |
| **Development & Build Tools** | **Cargo Workspace (Monorepo), Git & GitHub** | Unified build system and version control across all four backend services. |

---

## 8. Codebase Architecture & Development Methodology

### Codebase Structure (3 Repositories)
1. **`flamebase-js-sdk`:** Forked Firebase JavaScript SDK with minimal endpoint modifications.
2. **`flamebase` (Monorepo):** Cargo workspace containing all four core Rust/Axum services (Auth, Database, Storage, Functions) and dashboard integration.
3. **`installer`:** Handles automated setup and deployment in a single command.

### Development Methodology
* **Incremental Service-by-Service Build:** Services are built sequentially—starting with **Authentication**, followed by **Database**, **Storage**, and **Functions**—while developing the **Angular Dashboard** alongside them.
* **SDK-Driven Verification:** Each service is tested directly against the Firebase JS SDK to verify compatibility before moving on to the next service.

---

## 9. Presentation Design & Slide Deck Specifications

### Visual & Asset Rules
* **Base Template:** `Red and Pink Bold Pitch Deck Presentation.pptx` (10 slides, 16:9 widescreen, maroon and light-pink color palette, uppercase `Anton` headings).
* **Typography Fixes:** Reduce oversized heading fonts to prevent awkward word breaks (e.g., `"OUR SOLU TION"`) and increase tiny body text for readability.
* **Visual Assets & Diagrams:**
  * **Cover Asset:** Flame animation image (GIF/animated SVG) on the Cover/Homepage, plus custom service icons.
  * **Diagram 1 (Slide 2):** How Firebase works (`App` $\rightarrow$ `Firebase SDK` $\rightarrow$ Google-hosted `Auth`, `Database`, `Storage`, `Functions`).
  * **Diagram 2 (Slide 3/4):** How Flamebase replaces it (`App` $\rightarrow$ `flamebase-js-sdk` $\rightarrow$ Self-hosted `Rust/Axum` services + `redb`).
  * **Diagram 3 (Slide 9):** Codebase structure showing how `flamebase-js-sdk`, the `flamebase` monorepo, and the `installer` connect.
* **Team Photos:** Do **not** include real photos; keep placeholder image frames on the Team slide with names and roles only.
* **Excluded Sections:** Market analysis, business model, success stories, and financial projections are completely removed.

### Approved 10-Slide Deck Plan
1. **Slide 1 — Cover:** `FLAMEBASE`, tagline (*"Open-source, faster Firebase alternative"*), animated flame graphic, developers (Md. Saikat Islam, Md. Afif Hasan), supervisor (Mridha Md. Nafis Fuad).
2. **Slide 2 — What is Firebase?:** Architecture diagram and one-line explanations of Auth, Database, Storage, and Functions.
3. **Slide 3 — Motivation & Problem:** Lack of data/infrastructure control, per-query billing, and vendor lock-in.
4. **Slide 4 — Proposed Solution:** Open-source, self-hosted, drop-in Firebase SDK compatibility, Rust performance goals, server-only cost, and one-command install.
5. **Slide 5 — Key Features:** Four service cards (Auth: Mobile/Email + Google; Database: JSON on `redb`; Functions: Node.js server-side code; Storage: File storage).
6. **Slide 6 — Stakeholders & Target Users:** The 5 approved stakeholder groups and 3 target user segments.
7. **Slide 7 — Technologies & Tools:** Layered architectural stack table/diagram (`Client` $\rightarrow$ `SDK` $\rightarrow$ `Rust/Axum` $\rightarrow$ `redb`, alongside Angular Dashboard & One-Command Installer).
8. **Slide 8 — Methodology:** Iterative, service-by-service build cycle validated against the JS SDK.
9. **Slide 9 — Codebase Structure:** Diagram mapping `flamebase-js-sdk`, the `flamebase` monorepo, and `installer`.
10. **Slide 10 — Team & Thank You:** Team names/roles with placeholder avatars, supervisor credit, and GitHub repository link (`https://github.com/flamebase-org/flamebase`).