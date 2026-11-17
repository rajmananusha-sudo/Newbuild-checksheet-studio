(function () {
  const rfaiStatuses = ["Pending", "OK", "Not OK", "Partial OK", "N/A"];
  const fields = [
    { id: "opco_id", label: "Opco ID", type: "text" },
    { id: "installation_environment", label: "Installation Environment", type: "select", options: ["Indoor", "Outdoor"] },
    { id: "tower_type", label: "Tower Type", type: "select", options: ["GBT", "GBM", "RTT", "RTP"] }
  ];
  const makeItems = (rows, inputLabel, statusOptions) =>
    rows.map(([id, item, criteria]) => ({
      id,
      item,
      criteria,
      inputLabel,
      ...(statusOptions ? { statusOptions } : {})
    }));
  const makePhotos = (rows) => rows.map(([id, title, requirement]) => ({ id, title, requirement }));
  const sitePhotoRequirements = [
    ["site-view-angle-1", "Site View - Angle 1", "Capture a full view of the site from angle 1."],
    ["site-view-angle-2", "Site View - Angle 2", "Capture a full view of the site from angle 2."],
    ["complete-tower-view", "Complete Tower View", "Capture the complete tower view."],
    ["dg-set", "DG Set", "Capture the DG set."],
    ["rectifier", "Rectifier", "Capture the rectifier."],
    ["dcdb", "DCDB", "Capture the DCDB."],
    ["mccb-spd", "MCCB + SPD", "Capture the MCCB and SPD."],
    ["earthing-value", "Earthing Value", "Capture the earth resistance value."],
    ["bts-foundation", "BTS Foundation", "Capture the BTS foundation."],
    ["tower-foundation", "Tower Foundation", "Capture the tower foundation."]
  ];

  window.CHECKSHEET_TEMPLATES.push(
    {
      id: "tpl-rfai-checklist",
      name: "RFAI Checklist",
      revision: "Embedded",
      source: "-1Checklist.xlsx - RFAI Checklist",
      photoLimit: 1,
      siteFields: fields,
      sections: [
        {
          id: "rfai-site-checks",
          title: "RFAI Site Checks",
          description: "Select OK, Not OK, Partial OK, or N/A. Use remarks to explain partial verification.",
          items: makeItems(
            [
              ["1", "External Alarms", "All external alarms are extended, connected, and validated."],
              ["2", "Lightning Arrester Connection", "Lightning arrester is installed over the insulator and connected to the earth pit using a 70 sq.mm earthing cable."],
              ["3", "Earthing Terminations", "All earthing terminations are completed as per the approved layout/design."],
              ["4", "Electrical Cable Routing", "All electrical cables are laid and terminated according to the approved layout."],
              ["5", "Cable Thimbles and Terminations", "All earthing and electrical cables are properly thimbled and terminated."],
              ["6", "Earth Pit Installation", "Earth pits are installed correctly and in accordance with standards."],
              ["7", "Earth Resistance", "Earth resistance value of all earth pits is less than 5 Ohms."],
              ["8", "Tower Nuts and Bolts", "All tower nuts and bolts are tightened to the required torque values and verified."],
              ["9", "Tower Verticality", "Tower verticality has been checked and verified."],
              ["10", "Power Socket", "Power socket is installed near the DCDB stand."],
              ["11", "Cable Dressing and Protection", "All cables are properly routed, dressed, and protected."],
              ["12", "DG Automation Integration", "DG (Diesel Generator) is integrated with the automation system and functioning properly."],
              ["13", "DG Leakage", "No fuel or oil leakage is observed inside the DG set."],
              ["14", "Rectifier Operation", "All rectifiers are operational and functioning properly."],
              ["15", "Remote Monitoring System", "RMS (Remote Monitoring System) is connected and working properly."],
              ["16", "Signage Boards", "All required signage boards are installed."],
              ["17", "Security Light", "Security light is installed and functioning properly."],
              ["18", "Boundary Wall and Gate", "Boundary wall and gate are completed and in acceptable condition."]
            ],
            "Remarks",
            rfaiStatuses
          )
        }
      ],
      photoRequirements: [
        { id: "rfai-in-time-safety", title: "In-Time Photo & Site Safety", requirement: "Capture the audit engineer at the site and show the site safety conditions at the audit start." },
        ...makePhotos(sitePhotoRequirements)
      ]
    },
    {
      id: "tpl-rfai-document-checklist",
      name: "RFAI Document Checklist",
      revision: "Embedded",
      source: "-1Checklist.xlsx - Document Checklist",
      siteFields: fields,
      sections: [
        {
          id: "rfai-document-submissions",
          title: "Document Submissions",
          description: "Mark OK when submitted, Pending while awaiting submission, Not OK if missing or incomplete, or N/A when not applicable.",
          items: makeItems(
            [
              ["1", "SBC Report", "Responsible: Build Partner. Stage: C2 Stage."],
              ["2", "Site Drawing", "Responsible: Build Partner. Stage: C2 Stage."],
              ["3", "C2 Checklist", "Responsible: QA. Stage: C2 Stage."],
              ["4", "C3 Checklist", "Responsible: Build Partner. Stage: RFAI Offerance Stage."],
              ["5", "14 Days Curing Report", "Responsible: Build Partner. Stage: RFAI Offerance Stage."],
              ["6", "CTR Report - 7 & 28 Days", "Responsible: Build Partner. Stage: RFAI Offerance Stage."],
              ["7", "Verticality Report", "Responsible: Build Partner. Stage: RFAI Offerance Stage."],
              ["8", "T1 Checklist", "Responsible: QA. Stage: RFAI Stage."],
              ["9", "SMPS Checklist", "Responsible: QA. Stage: RFAI Stage."],
              ["10", "Electrical & Earthing Checklist", "Responsible: QA. Stage: RFAI Stage."],
              ["11", "BB Checklist", "Responsible: QA. Stage: RFAI Stage."],
              ["12", "ATS/SPS Checklist", "Responsible: QA. Stage: RFAI Stage."],
              ["13", "DG Checklist", "Responsible: QA. Stage: RFAI Stage."],
              ["14", "Grid/EB Checklist", "Responsible: QA. Stage: RFAI/FAT Stage."],
              ["15", "Inventory Checklist", "Responsible: QA. Stage: RFAI Stage."]
            ],
            "Submission Remarks"
          )
        }
      ],
      photoRequirements: []
    },
    {
      id: "tpl-rfai-snags-checklist",
      name: "RFAI Snags Checklist",
      revision: "Embedded",
      source: "-1Checklist.xlsx - Snags Checklist",
      photoLimit: 1,
      siteFields: [...fields, { id: "partner_supervisor", label: "Partner Supervisor Name", type: "text" }],
      sections: [
        {
          id: "snag-register",
          title: "Snag Register",
          description: "Enter each snag and its location in the description field. Mark unused rows N/A. Keep status Pending until rectified, then mark OK.",
          items: makeItems(
            Array.from({ length: 15 }, (_, index) => [
              String(index + 1),
              `Snag ${index + 1}`,
              "Write the snag description and exact location in the field below. Use N/A for unused rows."
            ]),
            "Rectification / Closure Remarks"
          )
          .map((item) => ({ ...item, descriptionLabel: "Snag Description" }))
        }
      ],
      photoRequirements: [
        { id: "snags-in-time-safety", title: "In-Time Photo & Site Safety", requirement: "Capture the auditor at the site and show site safety conditions at inspection start." },
        ...Array.from({ length: 10 }, (_, index) => ({
          id: `snag-defect-${index + 1}`,
          title: `Defect ${index + 1} Photo`,
          requirement: "Capture the defect and enough surrounding area to identify its location and condition.",
          descriptionLabel: "Defect Description"
        }))
      ]
    }
  );
})();
