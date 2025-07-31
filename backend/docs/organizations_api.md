# Organizations API

The Organizations API provides endpoints for managing and querying organization data with support for searching, filtering, and sorting.

## Endpoints

### GET /api/v1/organizations

Returns a paginated list of organizations with support for filtering, sorting, and searching.

#### Query Parameters

**Pagination:**
- `page_number` (integer, default: 1) - Page number
- `page_size` (integer, default: 20) - Number of items per page

**Sorting:**
- `sort_by` (string) - Field to sort by. Options:
  - `name` - Organization name
  - `permanence` - Permanence score
  - `ecological` - Ecological score
  - `social` - Social score
  - `financial` - Financial score
  - `year_founded` - Year founded
  - `estimated_impact_trees` - Estimated impact (trees)
  - `estimated_impact_hectares` - Estimated impact (hectares)
  - `country_hq` - Country headquarters
  - `org_type` - Organization type
- `order` (string) - Sort order. Options: `asc`, `desc` (default: `asc`)

**Search:**
- `search` (string) - Search term to match against organization name, country, geography, and other fields

**Filters:**
- `name` (string) - Filter by organization name (partial match)
- `country_hq` (string) - Filter by country headquarters (partial match)
- `geography` (string) - Filter by geography (partial match)
- `org_type` (string) - Filter by organization type
- `year_founded` (float) - Filter by year founded (exact match)
- `estimated_impact_trees` (float) - Filter by minimum estimated impact (trees)
- `estimated_impact_hectares` (float) - Filter by minimum estimated impact (hectares)
- `permanence` (float) - Filter by minimum permanence score
- `ecological` (float) - Filter by minimum ecological score
- `social` (float) - Filter by minimum social score
- `financial` (float) - Filter by minimum financial score
- `carbon_credits` (boolean) - Filter by carbon credits availability
- `public_facing_spatial_results` (boolean) - Filter by public facing spatial results
- `goals_class` (array) - Filter by goals classification (array field)
- `tree_growing_methods` (array) - Filter by tree growing methods (array field)
- `funding` (array) - Filter by funding sources (array field)
- `applied_standards` (array) - Filter by applied standards (array field)

#### Example Requests

```bash
# Get all organizations
GET /api/v1/organizations

# Sort by permanence descending
GET /api/v1/organizations?sort_by=permanence&order=desc

# Search for organizations containing "forest"
GET /api/v1/organizations?search=forest

# Filter by country and minimum permanence score
GET /api/v1/organizations?country_hq=USA&permanence=0.5

# Paginated results
GET /api/v1/organizations?page_number=2&page_size=10

# Filter by carbon credits
GET /api/v1/organizations?carbon_credits=true

# Complex filtering
GET /api/v1/organizations?sort_by=permanence&order=desc&permanence=0.6&country_hq=USA&search=conservation
```

#### Response Format

```json
{
  "data": [
    {
      "id": "1",
      "type": "organization",
      "attributes": {
        "name": "Example Organization",
        "country_hq": "USA",
        "org_type": "ngo",
        "permanence": 0.7,
        "ecological": 0.8,
        "social": 0.6,
        "financial": 0.5,
        "estimated_impact_trees": 1000000,
        "carbon_credits": true,
        "display_name": "Example Organization",
        "impact_summary": "1,000,000 trees",
        "org_type_display": "NGO",
        "carbon_credits_display": "Yes",
        "created_at": "2024-01-01T00:00:00.000Z",
        "updated_at": "2024-01-01T00:00:00.000Z"
      }
    }
  ],
  "meta": {
    "organizations_total": 100,
    "organizations_matching_query": 25,
    "from": 1,
    "to": 20,
    "pages": 5,
    "current_page": 1
  }
}
```

### GET /api/v1/organizations/:id

Returns a specific organization by ID.

#### Example Request

```bash
GET /api/v1/organizations/1
```

#### Response Format

```json
{
  "data": {
    "id": "1",
    "type": "organization",
    "attributes": {
      "name": "Example Organization",
      "country_hq": "USA",
      "org_type": "ngo",
      "permanence": 0.7,
      "ecological": 0.8,
      "social": 0.6,
      "financial": 0.5,
      "estimated_impact_trees": 1000000,
      "carbon_credits": true,
      "display_name": "Example Organization",
      "impact_summary": "1,000,000 trees",
      "org_type_display": "NGO",
      "carbon_credits_display": "Yes",
      "created_at": "2024-01-01T00:00:00.000Z",
      "updated_at": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

### POST /api/v1/organizations

Creates a new organization.

#### Request Body

```json
{
  "organization": {
    "name": "New Organization",
    "country_hq": "Germany",
    "org_type": "ngo",
    "permanence": 0.6,
    "ecological": 0.8,
    "social": 0.7,
    "financial": 0.5,
    "estimated_impact_trees": 500000,
    "carbon_credits": true
  }
}
```

### PUT /api/v1/organizations/:id

Updates an existing organization.

#### Request Body

```json
{
  "organization": {
    "name": "Updated Organization Name",
    "permanence": 0.9
  }
}
```

## Organization Types

- `Nongovernmental organization (NGO)` - Nongovernmental organization (NGO)
- `Community-based organization (CBO)` - Community-based organization (CBO)
- `Private Sector` - Private Sector
- `Intergovernmental organization (IGO)` - Intergovernmental organization (IGO)
- `Government` - Government
- `University / Academic institution` - University / Academic institution

## Score Fields

All score fields (permanence, ecological, social, financial) are float values between 0 and 1, where:
- 0.0 = Low score
- 0.5 = Medium score
- 1.0 = High score

## Array Fields

The following fields are stored as arrays and support array-based filtering:
- `goals_class` - Goals classification
- `tree_growing_methods` - Tree growing methods
- `funding` - Funding sources
- `applied_standards` - Applied standards
- `program_names` - Program names
- `targets` - Targets
- `geographylist` - Geography list
- `forms_of_intermediary_support` - Forms of intermediary support
- `dashboards_and_apps` - Dashboards and apps
- `ribbons` - Ribbons/awards

## Error Responses

```json
{
  "errors": {
    "name": ["can't be blank"],
    "org_type": ["can't be blank"]
  }
}
```

## Status Codes

- `200 OK` - Successful request
- `201 Created` - Organization created successfully
- `400 Bad Request` - Invalid parameters
- `404 Not Found` - Organization not found
- `422 Unprocessable Entity` - Validation errors 