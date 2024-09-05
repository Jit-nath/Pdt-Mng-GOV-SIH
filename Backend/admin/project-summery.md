### Overall Project Understanding:

- **CMPDI** monitors each project, focusing on financial and physical progress.
- Projects are classified into:
  - **S&T Projects:** Funded by the Ministry of Coal (MoC).
  - **R&D Projects:** Funded by Coal India Limited (CIL).
- S&T projects are monitored in meetings like the Technical Subcommittee and SSRC.
- R&D projects are monitored in meetings like the Apex Committee and R&D Board.
- **Project Investigators (PIs)** submit quarterly reports, including progress, fund utilization, time extension requests, etc.
- Each project might have around 100 reports with over 1,000 data fields to be filled.

### Key System Features:

- Develop a **responsive, secure web application** for tracking and updating project details.
- The system should allow recording every step until project completion.

### Project Investigator (PI) Console:

- PIs can update project details, such as:
  - **Activity Timelines:** Includes project creation date, end date, reporting dates, and report details.
  - **Schedule Table:** Timelines for tasks and milestones.
  - **Fund Utilization Details:** Complete financial information.
  - **Other Necessary Inputs:** (This could include any additional data requested by CMPDI).

### Admin Console (Handled by CMPDI):

- Admin tasks include:
  - Creating unique project codes based on funding and other criteria.
  - Setting project details:
    - Title
    - Principal/Sub-Implementing Agencies
    - Project Investigators
    - Project Coordinators
    - Duration, start date, and scheduled completion date
    - Budget (agency-wise and head-wise)
  - Setting final project status upon completion.
  - Sending official communications (e.g., meeting updates, delays) to relevant stakeholders via email.

### Inspector Console:

- Initial project information is shared with the inspector via email and phone verification.
- Inspectors get a unique username and password to access their assigned project.
- **Inspection Reports Include:**
  - Personal info of the inspector.
  - Bank details of the contractor.
  - Co-inspector details.
- Reports are submitted in prescribed forms provided later by CMPDI.
- The inspector can chat with the admin (CMPDI) in case of any rule breaches.
- Once data is submitted, it’s locked to prevent further modification (like Google Slides' read-only mode).
