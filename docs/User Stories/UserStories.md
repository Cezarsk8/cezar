# User Stories - Listo

## US001 - Initial Solution Scaffold with Clean Architecture + CQRS

### 1 - Description
As a development team, we need a complete .NET 8 Web API solution scaffold following Clean Architecture principles with CQRS pattern, so that we have a solid foundation to build the Listo application with proper separation of concerns, testability, and maintainability.

### 2 - Acceptance Criteria

#### Step 1: Solution Structure Setup
- [x] Create solution file `Listo.sln`
- [x] Create four projects: API, Application, Domain, Infrastructure
- [x] Configure project references (API → Application, Application → Domain, Infrastructure → Application + Domain)
- [x] Add `Directory.Build.props` with nullable reference types and implicit usings enabled
- [x] Add standard .NET `.gitignore` file

#### Step 2: Domain Layer Implementation
- [x] Create base `Entity.cs` with Guid Id and equality by Id
- [x] Create `Result.cs` for success/failure pattern with error handling
- [x] Add `Users/` folder with placeholder `User.cs`, `Role.cs` and README for future Auth implementation
- [x] Ensure Domain has no external dependencies

#### Step 3: Application Layer Implementation
- [x] Create abstraction interfaces (`IReadRepository<T>`, `IWriteRepository<T>`)
- [x] Implement `ValidationBehavior.cs` for MediatR pipeline
- [x] Create sample Ping feature with Query, Handler, and Validator
- [x] Add `DependencyInjection.cs` to register MediatR, validators, and behaviors
- [x] Add placeholder mapping folder structure

#### Step 4: Infrastructure Layer Implementation
- [x] Create in-memory repository implementations
- [x] Add `DependencyInjection.cs` to register Infrastructure services
- [x] Prepare structure for future database/external service integrations

#### Step 5: API Layer Implementation
- [x] Configure `Program.cs` with Swagger, API versioning, and MediatR wiring
- [x] Create `PingController.cs` with versioned endpoint `/api/v1/ping`
- [x] Add `/health` endpoint
- [x] Configure `appsettings.json` and `launchSettings.json`
- [x] Enable XML documentation for Swagger

#### Step 6: Documentation
- [x] Create `Architecture.md` with layers diagram, dependency rules, CQRS flow
- [x] Create `DevelopmentHistory.md` with initial v0.1 changelog entry
- [x] Create `UserStories.md` (this file) with template structure
- [x] Create `README.md` with quick start guide and roadmap

#### Step 7: Quality Verification
- [x] Verify `dotnet build` succeeds without errors
- [x] Verify API runs and Swagger UI is accessible at `/swagger`
- [ ] Verify `/api/v1/ping` endpoint returns expected response
- [ ] Verify `/health` endpoint returns healthy status

### 3 - Technical Details and Required Dependencies

**Target Framework:** .NET 8.0

**NuGet Packages:**
- **Listo.API:**
  - Swashbuckle.AspNetCore (6.5.0+)
  - Microsoft.AspNetCore.Mvc.Versioning (5.1.0+)
  - Microsoft.AspNetCore.Mvc.Versioning.ApiExplorer (5.1.0+)

- **Listo.Application:**
  - MediatR (12.0.0+)
  - FluentValidation (11.9.0+)
  - MediatR.Extensions.Microsoft.DependencyInjection (11.0.0+)

- **Listo.Domain:**
  - No external dependencies

- **Listo.Infrastructure:**
  - Microsoft.Extensions.Configuration.Abstractions (8.0.0+)
  - Microsoft.Extensions.Logging.Abstractions (8.0.0+)

**Architecture Patterns:**
- Clean Architecture (Onion Architecture)
- CQRS (Command Query Responsibility Segregation)
- Repository Pattern
- Result Pattern for error handling
- Pipeline Behavior for cross-cutting concerns

### 4 - Project Structure

```
Listo/
├── Docs/
│   ├── Architecture.md
│   ├── DevelopmentHistory.md
│   └── UserStories.md
├── Listo.API/
│   ├── Controllers/
│   │   └── v1/
│   │       └── PingController.cs
│   ├── Properties/
│   │   └── launchSettings.json
│   ├── appsettings.json
│   ├── appsettings.Development.json
│   └── Program.cs
├── Listo.Application/
│   ├── Abstractions/
│   │   ├── IReadRepository.cs
│   │   └── IWriteRepository.cs
│   ├── Behaviors/
│   │   └── ValidationBehavior.cs
│   ├── Common/
│   │   └── Mapping/
│   ├── Features/
│   │   └── Ping/
│   │       ├── PingQuery.cs
│   │       ├── PingQueryHandler.cs
│   │       └── PingQueryValidator.cs
│   └── DependencyInjection.cs
├── Listo.Domain/
│   ├── Common/
│   │   ├── Entity.cs
│   │   └── Result.cs
│   └── Users/
│       ├── User.cs
│       ├── Role.cs
│       └── README.md
├── Listo.Infrastructure/
│   ├── Persistence/
│   │   └── InMemory/
│   │       ├── InMemoryReadRepository.cs
│   │       └── InMemoryWriteRepository.cs
│   └── DependencyInjection.cs
├── Directory.Build.props
├── .gitignore
├── Listo.sln
└── README.md
```

---

## Template for Future User Stories

### US00X - [Title]

#### 1 - Description
Como [persona], eu preciso [funcionalidade], para [objetivo/benefício].

#### 2 - Acceptance Criteria

##### Step 1: [Macro Step Name]
- [ ] Action 1
- [ ] Action 2

##### Step 2: [Macro Step Name]
- [ ] Action 1
- [ ] Action 2

#### 3 - Technical Details and Required Dependencies
[List technical requirements, packages, patterns, etc.]

#### 4 - Project Structure
```
[Show relevant file structure]
```
