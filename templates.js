window.CHECKSHEET_TEMPLATES = [
  {
    "id": "tpl-c2-civil-stage-audit-r1",
    "name": "Civil Installation (C-2) Stage Audit Check Sheet",
    "revision": "Embedded",
    "source": "C1 & C2 Civil Check Sheet-A R1.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "site-id-name",
        "label": "Site ID / Name",
        "type": "text",
        "required": false
      },
      {
        "id": "tower-height",
        "label": "Tower Height",
        "type": "text",
        "required": false
      },
      {
        "id": "foundation-design-drawing-ref",
        "label": "Foundation Design / Drawing Ref",
        "type": "text",
        "required": false
      },
      {
        "id": "build-partner-tsp",
        "label": "Build Partner (TSP)",
        "type": "text",
        "required": false
      }
    ],
    "sections": [
      {
        "id": "1-site-planning-and-preliminary-checks",
        "title": "1. Site Planning & Preliminary Checks",
        "description": "Verification of site design, safety parameters, and administrative approvals.",
        "items": [
          {
            "id": "1.1",
            "item": "Design Compliance",
            "criteria": "Foundation design matches the SBC report (e.g., Value 20) and Wind Zone (e.g., 140 KMPH).",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.2",
            "item": "Approved Layout",
            "criteria": "Planning approved drawing and site layout are available on-site.",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.3",
            "item": "Site Elevation",
            "criteria": "Site level is above the Natural Ground Level (NGL) or road level per recommendation.",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.4",
            "item": "Safety Clearance",
            "criteria": "No High Tension (HT) lines are passing near the tower area.",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.5",
            "item": "Weather Readiness",
            "criteria": "Casting is not being performed during rain or poor weather conditions.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "2-material-quality-assurance",
        "title": "2. Material Quality Assurance",
        "description": "Verification of raw material specifications and visual integrity.",
        "items": [
          {
            "id": "2.1",
            "item": "Steel Specifications",
            "criteria": "Approved Make: ; Grade: Fe550 (or approved equivalent).",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.2",
            "item": "Cement Grade",
            "criteria": "Approved Make; Grade: OPC (53); Check manufacturing date and quantity.",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.3",
            "item": "Aggregates (Stone)",
            "criteria": "Coarse aggregates are free from impurities; size/shape are visually verified.",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.4",
            "item": "Aggregates (Sand)",
            "criteria": "Fine aggregates are free from impurities (visual check).",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.5",
            "item": "Water Quality",
            "criteria": "Water is free from injurious amounts of oils, acids, or organic matter.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "3-structural-framework-reinforcement-and-shuttering",
        "title": "3. Structural Framework (Reinforcement & Shuttering)",
        "description": "Ensuring the steel \"skeleton\" and molds are structurally sound.",
        "items": [
          {
            "id": "3.1",
            "item": "Reinforcement Detail",
            "criteria": "Steel size, numbers, placement, and spacing must be as per the Bar Bending Schedule (BBS) in the drawing.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.2",
            "item": "Stirrups/Rings",
            "criteria": "Steel size, numbers, placement, and spacing must be as per the Bar Bending Schedule (BBS) in the drawing.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.3",
            "item": "Shuttering Quality",
            "criteria": "Steel plates utilized; tightened, straight, and properly aligned.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.4",
            "item": "Release Agent",
            "criteria": "Shuttering oil applied uniformly to all internal surfaces.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.5",
            "item": "Clear Cover",
            "criteria": "Precast cover blocks used; clear cover maintained between steel and shuttering.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "4-civil-geometry-and-earthwork",
        "title": "4. Civil Geometry & Earthwork",
        "description": "Audit of precise measurements and column positioning.",
        "items": [
          {
            "id": "4.1",
            "item": "Base Preparation",
            "criteria": "PCC thickness and base treatment (e.g., sand bed/rubble) per drawing.",
            "inputLabel": "Actual Value"
          },
          {
            "id": "4.2",
            "item": "Column Distance (A)",
            "criteria": "Center-to-center distance of column position (Side A).",
            "inputLabel": "Actual Value"
          },
          {
            "id": "4.3",
            "item": "Column Distance (B)",
            "criteria": "Center-to-center distance of column position (Side B).",
            "inputLabel": "Actual Value"
          },
          {
            "id": "4.4",
            "item": "Column Distance (C)",
            "criteria": "Center-to-center distance of column position (Side C).",
            "inputLabel": "Actual Value"
          }
        ]
      },
      {
        "id": "5-concrete-casting-and-quality-control",
        "title": "5. Concrete Casting & Quality Control",
        "description": "Technical execution of the RCC phase and final finishing.",
        "items": [
          {
            "id": "5.1",
            "item": "Concrete Grade",
            "criteria": "Mix Grade M20; Ratio 1:1.5:3.",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.2",
            "item": "Workability (Slump)",
            "criteria": "Consistently achieved value (e.g., 80mm) at start, middle, and end of casting.",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.3",
            "item": "Water-Cement Ratio",
            "criteria": "Liters of water per bag of cement used to achieve slump (e.g., 30L).",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.4",
            "item": "Mechanical Mixing",
            "criteria": "Mechanical mixture machine and vibrator used during the entire process.",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.5",
            "item": "Pouring Technique",
            "criteria": "Concrete not dropped from a height >1.5m; no aggregate segregation observed.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "6-post-concreting-and-foundation-finish",
        "title": "6. Post Concreting & Foundation Finish",
        "description": "Technical execution of the RCC phase and final finishing.",
        "items": [
          {
            "id": "6.1",
            "item": "Concrete Pouring",
            "criteria": "Concrete pouring is carried out strictly as per the approved drawing and specification requirements.",
            "inputLabel": "Remarks"
          },
          {
            "id": "6.2",
            "item": "No Voids",
            "criteria": "During concreting, the vibrator is used adequately to ensure proper compaction and to prevent voids or segregation of concrete.",
            "inputLabel": "Remarks"
          },
          {
            "id": "6.3",
            "item": "No Bleeding",
            "criteria": "No visible water film, laitance, or surface bleeding is observed during or after pouring, ensuring uniformity and strength of the concrete.",
            "inputLabel": "Remarks"
          },
          {
            "id": "6.4",
            "item": "Final Finish",
            "criteria": "Foundation finished with a natural smooth surface post-completion.",
            "inputLabel": "Remarks"
          },
          {
            "id": "6.5",
            "item": "Curing",
            "criteria": "Curing initiated immediately after final setting; curing maintained continuously for a minimum of 14 days (or as per specification) using approved methods such as ponding, wet hessian cloth, or curing compound.",
            "inputLabel": "Remarks"
          }
        ]
      }
    ],
    "photoRequirements": [
      {
        "id": "photo-site-readiness-and-team",
        "title": "Site Readiness & Team",
        "requirement": "Photograph 1. An \"in-time\" selfie of the audit engineer with the mixture machine and supervisor to verify the start of the audit at the scheduled time.",
        "limit": 4
      },
      {
        "id": "photo-civil-measurements",
        "title": "Civil Measurements",
        "requirement": "Photographs 2 & 3. Use a measuring tape to show the center-to-center distance of columns/templates and the depth of the column for casting.",
        "limit": 4
      },
      {
        "id": "photo-material-compliance",
        "title": "Material Compliance",
        "requirement": "Photographs 4 & 5. Clear close-ups of the cement bags (showing make, grade, and mfg date) and the total quantity of material available on-site.",
        "limit": 4
      },
      {
        "id": "photo-steel-reinforcement",
        "title": "Steel Reinforcement",
        "requirement": "Photographs 6 & 7. Visual evidence of the stirrup diameter, center-to-center distance, and the number of steel rods in the column legs.",
        "limit": 4
      },
      {
        "id": "photo-workability-test",
        "title": "Workability Test",
        "requirement": "Photograph 8. The slump cone and tamping rod with a tape measure showing the slump value (e.g., 80mm) to verify mix consistency.",
        "limit": 4
      },
      {
        "id": "photo-shuttering-and-cover",
        "title": "Shuttering & Cover",
        "requirement": "Photographs 9 & 10. Visual confirmation of shuttering alignment, tightness, oil application, and precast blocks maintaining clear cover.",
        "limit": 4
      },
      {
        "id": "photo-casting-execution",
        "title": "Casting Execution",
        "requirement": "Photograph 11. Action shot of the concrete being poured via chute and the application of a mechanical vibrator.",
        "limit": 4
      },
      {
        "id": "photo-final-structural-finish",
        "title": "Final Structural Finish",
        "requirement": "Photograph 12. An \"out-time\" selfie of the audit engineer with the completed, smooth-finished foundation background.",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-c3-civil-check-sheet-a-r1",
    "name": "DG / OD Installation (C-3) Stage Audit Check Sheet",
    "revision": "Embedded",
    "source": "C3 Civil Check Sheet-A R1.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "site-id-name",
        "label": "Site ID / Name",
        "type": "text",
        "required": false
      },
      {
        "id": "tower-height",
        "label": "Tower Height",
        "type": "text",
        "required": false
      },
      {
        "id": "foundation-design-drawing-ref",
        "label": "Foundation Design / Drawing Ref",
        "type": "text",
        "required": false
      },
      {
        "id": "build-partner-tsp",
        "label": "Build Partner (TSP)",
        "type": "text",
        "required": false
      }
    ],
    "sections": [
      {
        "id": "1-site-planning-and-preliminary-checks",
        "title": "1. Site Planning & Preliminary Checks",
        "description": "Verification of site design, safety parameters, and administrative approvals.",
        "items": [
          {
            "id": "1.1",
            "item": "Design Compliance",
            "criteria": "DG / OD Foundation design matches the SBC report.",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.2",
            "item": "Positioning as per Approved Layout",
            "criteria": "The planning-approved layout for the positioning of DG/OD foundation is available at the site, along with the corresponding DG/OD foundation drawings.",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.3",
            "item": "Site Elevation",
            "criteria": "Site level is above the Natural Ground Level (NGL) or road level per recommendation.",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.4",
            "item": "Restrictions",
            "criteria": "DG/OD bed must not be placed on any backfilled area and must fully comply with the specified requirements of compaction & water table",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.5",
            "item": "Weather Readiness",
            "criteria": "Casting is not being performed during rain or poor weather conditions.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "2-material-quality-assurance",
        "title": "2. Material Quality Assurance",
        "description": "Verification of raw material specifications and visual integrity.",
        "items": [
          {
            "id": "2.1",
            "item": "Steel Specifications",
            "criteria": "Approved Make: ; Grade: Fe550 (or approved equivalent).",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.2",
            "item": "Cement Grade",
            "criteria": "Approved Make; Grade: OPC (53); Check manufacturing date and quantity.",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.3",
            "item": "Aggregates (Stone)",
            "criteria": "Coarse aggregates are free from impurities; size/shape are visually verified.",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.4",
            "item": "Aggregates (Sand)",
            "criteria": "Fine aggregates are free from impurities (visual check).",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.5",
            "item": "Water Quality",
            "criteria": "Water is free from injurious amounts of oils, acids, or organic matter.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "3-structural-framework-reinforcement-and-shuttering",
        "title": "3. Structural Framework (Reinforcement & Shuttering)",
        "description": "Ensuring the steel \"skeleton\" and molds are structurally sound.",
        "items": [
          {
            "id": "3.1",
            "item": "Reinforcement Detail",
            "criteria": "Steel size, numbers, placement, and spacing must be as per the Bar Bending Schedule (BBS) in the drawing.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.2",
            "item": "Stirrups/Rings",
            "criteria": "Steel size, numbers, placement, and spacing must be as per the Bar Bending Schedule (BBS) in the drawing.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.3",
            "item": "Shuttering Quality",
            "criteria": "Steel plates utilized; tightened, straight, and properly aligned.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.4",
            "item": "Release Agent",
            "criteria": "Shuttering oil applied uniformly to all internal surfaces.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.5",
            "item": "Clear Cover",
            "criteria": "Precast cover blocks used; clear cover maintained between steel and shuttering.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "4-civil-geometry-and-earthwork",
        "title": "4. Civil Geometry & Earthwork",
        "description": "Audit of precise measurements and column positioning.",
        "items": [
          {
            "id": "4.1",
            "item": "Base Preparation",
            "criteria": "PCC thickness and base treatment (e.g., sand bed/rubble) per drawing.",
            "inputLabel": "Actual Value"
          },
          {
            "id": "4.2",
            "item": "Column Distance (A)",
            "criteria": "Center-to-center distance of column position (Side A).",
            "inputLabel": "Actual Value"
          },
          {
            "id": "4.3",
            "item": "Column Distance (B)",
            "criteria": "Center-to-center distance of column position (Side B).",
            "inputLabel": "Actual Value"
          },
          {
            "id": "4.4",
            "item": "Column Distance (C)",
            "criteria": "Center-to-center distance of column position (Side C).",
            "inputLabel": "Actual Value"
          },
          {
            "id": "4.5",
            "item": "Slab Preperation",
            "criteria": "All steel for DG / OD bed beam bottom and top steel, binding , placement and column steel connected with Slab Steel.",
            "inputLabel": "Actual Value"
          },
          {
            "id": "4.6",
            "item": "No Escentricty",
            "criteria": "Check alignment, no eccentricity and position of footing , joint between column and slab",
            "inputLabel": "Actual Value"
          },
          {
            "id": "4.7",
            "item": "Backfilling / Additional Filling",
            "criteria": "Check the Filling / PCC below the slab (if applicable)",
            "inputLabel": "Actual Value"
          }
        ]
      },
      {
        "id": "5-concrete-casting-and-quality-control",
        "title": "5. Concrete Casting & Quality Control",
        "description": "Technical execution of the RCC phase and final finishing.",
        "items": [
          {
            "id": "5.1",
            "item": "Concrete Grade",
            "criteria": "Mix Grade M20; Ratio 1:1.5:3.",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.2",
            "item": "Workability (Slump)",
            "criteria": "Consistently achieved value (e.g., 80mm) at start, middle, and end of casting.",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.3",
            "item": "Water-Cement Ratio",
            "criteria": "Liters of water per bag of cement used to achieve slump (e.g., 30L).",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.4",
            "item": "Mechanical Mixing",
            "criteria": "Mechanical mixture machine and vibrator used during the entire process.",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.5",
            "item": "Pouring Technique",
            "criteria": "Concrete not dropped from a height >1.5m; no aggregate segregation observed.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "6-post-concreting-and-foundation-finish",
        "title": "6. Post Concreting & Foundation Finish",
        "description": "Technical execution of the RCC phase and final finishing.",
        "items": [
          {
            "id": "6.1",
            "item": "Concrete Pouring",
            "criteria": "Concrete pouring is carried out strictly as per the approved drawing and specification requirements.",
            "inputLabel": "Remarks"
          },
          {
            "id": "6.2",
            "item": "No Voids",
            "criteria": "During concreting, the vibrator is used adequately to ensure proper compaction and to prevent voids or segregation of concrete.",
            "inputLabel": "Remarks"
          },
          {
            "id": "6.3",
            "item": "No Bleeding",
            "criteria": "No visible water film, laitance, or surface bleeding is observed during or after pouring, ensuring uniformity and strength of the concrete.",
            "inputLabel": "Remarks"
          },
          {
            "id": "6.4",
            "item": "Final Finish",
            "criteria": "Foundation finished with a natural smooth surface post-completion.",
            "inputLabel": "Remarks"
          },
          {
            "id": "6.5",
            "item": "Curing",
            "criteria": "Curing initiated immediately after final setting; curing maintained continuously for a minimum of 14 days (or as per specification) using approved methods such as ponding, wet hessian cloth, or curing compound.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "7-earth-pit-construction",
        "title": "7. Earth Pit Construction",
        "description": "Verification of Earthing",
        "items": [
          {
            "id": "7.1",
            "item": "Earthing Type & Configuration",
            "criteria": "Earthing must follow the drawing requirements (horizontal/vertical) and shall be chemical earthing only.",
            "inputLabel": "Remarks"
          },
          {
            "id": "7.2",
            "item": "Earth Pit Construction",
            "criteria": "Number and location of earth pits must follow the site layout; vertical bore should be ≥100 mm diameter and 3 m deep (or as per drawing), with 3 m spacing between pits.",
            "inputLabel": "Remarks"
          },
          {
            "id": "7.3",
            "item": "Material Verification (Electrode & Compound)",
            "criteria": "Electrode: 14 mm dia, 3 m copper‑bonded solid rod, UL‑marked, free from rust or damage. Chemical backfill: 23 kg per pit, approved make only, and within expiry date.",
            "inputLabel": "Remarks"
          },
          {
            "id": "7.4",
            "item": "Chemical Filling & Backfilling",
            "criteria": "Chemical to be poured only in slurry form using a detachable mould. No ground mixing; slurry to be filled up to just below the terminal plate (as per guideline). Backfill with good-quality soil, free from gravel/sand, and ensure proper compaction.",
            "inputLabel": "Remarks"
          },
          {
            "id": "7.5",
            "item": "Interconnection & Chamber Installation",
            "criteria": "Pits interconnected using 50×6 mm GI strip; SS nut‑bolts, tightened properly. FRP chamber (UV-stabilized), correct size, undamaged, with cover 50–70 mm above FGL and pit marking.",
            "inputLabel": "Remarks"
          },
          {
            "id": "7.6",
            "item": "Earthing Value",
            "criteria": "The measured earth resistance shall comply with the specified limits provided in the approved earthing drawing.",
            "inputLabel": "Remarks"
          }
        ]
      }
    ],
    "photoRequirements": [
      {
        "id": "photo-site-readiness-and-team",
        "title": "Site Readiness & Team",
        "requirement": "Photograph 1. Selfie of the Supervsior with the mixture machine and supervisor to verify the start of the audit at the scheduled time.",
        "limit": 4
      },
      {
        "id": "photo-civil-measurements",
        "title": "Civil Measurements",
        "requirement": "Photographs 2 & 3. Use a measuring tape to show the center-to-center distance of columns/templates and the depth of the DG/OD foundation.",
        "limit": 4
      },
      {
        "id": "photo-material-compliance",
        "title": "Material Compliance",
        "requirement": "Photographs 4 & 5. Clear close-ups of the cement bags (showing make, grade, and mfg date) and the total quantity of material available on-site.",
        "limit": 4
      },
      {
        "id": "photo-steel-reinforcement",
        "title": "Steel Reinforcement",
        "requirement": "Photographs 6 & 7. Visual evidence of the stirrup diameter, center-to-center distance, and the number of steel rods in the column legs.",
        "limit": 4
      },
      {
        "id": "photo-workability-test",
        "title": "Workability Test",
        "requirement": "Photograph 8. The slump cone and tamping rod with a tape measure showing the slump value (e.g., 80mm) to verify mix consistency.",
        "limit": 4
      },
      {
        "id": "photo-shuttering-and-cover",
        "title": "Shuttering & Cover",
        "requirement": "Photographs 9 & 10. Visual confirmation of shuttering alignment, tightness, oil application, and precast blocks maintaining clear cover.",
        "limit": 4
      },
      {
        "id": "photo-casting-execution",
        "title": "Casting Execution",
        "requirement": "Photograph 11. Action shot of the concrete being poured via chute and the application of a mechanical vibrator.",
        "limit": 4
      },
      {
        "id": "photo-final-structural-finish",
        "title": "Final Structural Finish",
        "requirement": "Photograph 12. Selfie of the Supervsior with the completed, smooth-finished foundation background.",
        "limit": 4
      },
      {
        "id": "photo-earthing-checks",
        "title": "Earthing Checks",
        "requirement": "Photograph 13. Earthing no of bag, make, expire date & Chemical Pouring",
        "limit": 4
      },
      {
        "id": "photo-final-structural-finish-2",
        "title": "Final Structural Finish",
        "requirement": "Photograph 14. C/c distance from One pit to 2nd Pit & Complete Finish Earth pit 2",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-c4-stage-boundary-wall-checksheet",
    "name": "Boundary wall/Fencing C4 stage Acceptance Checksheet",
    "revision": "Embedded",
    "source": "C4 stage Boundary wall Checksheet.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "country-circle",
        "label": "Country/Circle",
        "type": "text",
        "required": false
      },
      {
        "id": "district",
        "label": "District",
        "type": "text",
        "required": false
      },
      {
        "id": "date-of-completion",
        "label": "Date of Completion",
        "type": "date",
        "required": false
      }
    ],
    "sections": [],
    "photoRequirements": [
      {
        "id": "photo-1-in-time-audit-engineer-selfie-with-background-of-site",
        "title": "Photograph 1 - In time - audit engineer selfie with background of site",
        "requirement": "Photograph - 1 (In time - audit engineer selfie with background of site)",
        "limit": 4
      },
      {
        "id": "photo-2-complete-view-of-before-start-of-audit",
        "title": "Photograph 2 - complete view of before start of Audit",
        "requirement": "Photograph - 2 (complete view of before start of Audit)",
        "limit": 4
      },
      {
        "id": "photo-3-fence-foundation",
        "title": "Photograph 3 - Fence Foundation",
        "requirement": "Photograph - 3 Fence Foundation",
        "limit": 4
      },
      {
        "id": "photo-4-brick-work-workmanship",
        "title": "Photograph 4 - Brick work workmanship",
        "requirement": "Photograph - 4 Brick work workmanship",
        "limit": 4
      },
      {
        "id": "photo-5-fence-installation-with-number-of-layer",
        "title": "Photograph 5 - Fence installation with number of layer",
        "requirement": "Photograph - 5 Fence installation with number of layer",
        "limit": 4
      },
      {
        "id": "photo-6-fence-installation-with-number-of-layer",
        "title": "Photograph 6 - Fence installation with number of layer",
        "requirement": "Photograph 6 - Fence installation with number of layer",
        "limit": 4
      },
      {
        "id": "photo-7-backfilling-compaction-finish-level",
        "title": "Photograph 7 - Backfilling / compaction / finish level",
        "requirement": "Photograph - 7 Backfilling / compaction / finish level",
        "limit": 4
      },
      {
        "id": "photo-8-drain-exit",
        "title": "Photograph 8 - Drain exit",
        "requirement": "Photograph - 8 Drain exit",
        "limit": 4
      },
      {
        "id": "photo-9-painting-snowcem",
        "title": "Photograph 9 - Painting / Snowcem",
        "requirement": "Photograph- 9 Painting / Snowcem",
        "limit": 4
      },
      {
        "id": "photo-10-gate-view-in-close-condition",
        "title": "Photograph 10 - Gate view in close condition",
        "requirement": "Photograph - 10 Gate view in close condition",
        "limit": 4
      },
      {
        "id": "photo-11-complete-inside-view-from-gate",
        "title": "Photograph 11 - Complete inside view from gate",
        "requirement": "Photograph- 11 Complete inside view from gate",
        "limit": 4
      },
      {
        "id": "photo-12-site-complete-view-with-out-time-selfie",
        "title": "Photograph 12 - site complete view with out time selfie",
        "requirement": "Photograph - 12 site complete view with out time selfie",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-diesel-generator-acceptance-check-sheet",
    "name": "Diesel Generator Acceptance Checksheet",
    "revision": "Embedded",
    "source": "Diesel Generator Acceptance Check sheet.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "country",
        "label": "Country",
        "type": "text",
        "required": false
      },
      {
        "id": "area",
        "label": "Area",
        "type": "text",
        "required": false
      },
      {
        "id": "project",
        "label": "Project",
        "type": "text",
        "required": false
      },
      {
        "id": "nb",
        "label": "NB",
        "type": "text",
        "required": false
      },
      {
        "id": "sl-no",
        "label": "Sl. No",
        "type": "text",
        "required": false
      },
      {
        "id": "dg",
        "label": "DG",
        "type": "text",
        "required": false
      },
      {
        "id": "alternator",
        "label": "Alternator",
        "type": "text",
        "required": false
      },
      {
        "id": "1-ph-3-ph",
        "label": "1-PH/3-PH",
        "type": "text",
        "required": false
      },
      {
        "id": "dg-starting-system",
        "label": "DG Starting system",
        "type": "text",
        "required": false
      },
      {
        "id": "capacity-of-battery-super-capacitor",
        "label": "Capacity of Battery/Super capacitor",
        "type": "text",
        "required": false
      },
      {
        "id": "make",
        "label": "Make",
        "type": "text",
        "required": false
      },
      {
        "id": "engine",
        "label": "Engine",
        "type": "text",
        "required": false
      },
      {
        "id": "capacity",
        "label": "Capacity",
        "type": "text",
        "required": false
      },
      {
        "id": "date-of-installation",
        "label": "Date of installation",
        "type": "date",
        "required": false
      },
      {
        "id": "date-of-commissioning",
        "label": "Date of commissioning",
        "type": "date",
        "required": false
      }
    ],
    "sections": [],
    "photoRequirements": [
      {
        "id": "photo-1-in-time-audit-engineer-selfie-with-back-ground-of-dg",
        "title": "Photograph 1 - In time - audit engineer selfie with back ground of DG",
        "requirement": "Photograph - 1 (In time - audit engineer selfie with back ground of DG)",
        "limit": 4
      },
      {
        "id": "photo-2-dg-grid-and-body-earthing",
        "title": "Photograph 2 - DG Grid and body Earthing",
        "requirement": "Photograph - 2 (DG Grid and body Earthing)",
        "limit": 4
      },
      {
        "id": "photo-3-dg-cranking-super-capacitor-installation",
        "title": "Photograph 3 - DG cranking super capacitor installation",
        "requirement": "Photograph - 3 (DG cranking super capacitor installation)",
        "limit": 4
      },
      {
        "id": "photo-4-alternator-o-p-voltage",
        "title": "Photograph 4 - Alternator O/P voltage",
        "requirement": "Photograph - 4 (Alternator O/P voltage)",
        "limit": 4
      },
      {
        "id": "photo-5-dg-neutral-earthing",
        "title": "Photograph 5 - DG neutral earthing",
        "requirement": "Photograph - 5 (DG neutral earthing)",
        "limit": 4
      },
      {
        "id": "photo-6-gcu-panel-display",
        "title": "Photograph 6 - GCU panel display",
        "requirement": "Photograph 6 -(GCU panel display)",
        "limit": 4
      },
      {
        "id": "photo-7-alternator-power-cable-terminations",
        "title": "Photograph 7 - Alternator power cable terminations",
        "requirement": "Photograph - 7 (Alternator power cable terminations)",
        "limit": 4
      },
      {
        "id": "photo-8-dg-control-cable-termination",
        "title": "Photograph 8 - DG control cable termination",
        "requirement": "Photograph - 8 (DG control cable termination)",
        "limit": 4
      },
      {
        "id": "photo-9-dg-coolant-indication",
        "title": "Photograph 9 - DG Coolant indication",
        "requirement": "Photograph- 9 (DG Coolant indication)",
        "limit": 4
      },
      {
        "id": "photo-10-lube-oil-qty-indication",
        "title": "Photograph 10 - Lube Oil Qty indication",
        "requirement": "Photograph - 10 (Lube Oil Qty indication)",
        "limit": 4
      },
      {
        "id": "photo-11-undergroud-cable-routing",
        "title": "Photograph 11 - Undergroud cable routing",
        "requirement": "Photograph - 11 (Undergroud cable routing)",
        "limit": 4
      },
      {
        "id": "photo-12-out-time-selfie-with-dg-overall-installation-at-background",
        "title": "Photograph 12 - Out time selfie with DG overall installation at background",
        "requirement": "Photograph - 12 (Out time selfie with DG overall installation at background )",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-electrical-and-earthing-acceptance-checksheet",
    "name": "Electrical and Earthing Acceptance Checksheet",
    "revision": "Embedded",
    "source": "Electrical and Earthing Acceptance Checksheet.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "country-circle",
        "label": "Country/Circle",
        "type": "text",
        "required": false
      },
      {
        "id": "district",
        "label": "District",
        "type": "text",
        "required": false
      },
      {
        "id": "date-of-completion",
        "label": "Date of Completion",
        "type": "date",
        "required": false
      },
      {
        "id": "mccb-to-sps-cable-make-and-size",
        "label": "MCCB to SPS cable make and size",
        "type": "text",
        "required": false
      }
    ],
    "sections": [
      {
        "id": "electrical-and-earthing-acceptnce-installation-requirements",
        "title": "Significant Installation Phases & Requirements",
        "description": "Capture the listed installation values or remarks from the original check sheet.",
        "items": [
          {
            "id": "R-01",
            "item": "MCCB to SPS cable make and size",
            "criteria": "MCCB to SPS cable make and size:",
            "inputLabel": "Value / Remarks"
          },
          {
            "id": "R-02",
            "item": "SPS to SMPS cable make and size",
            "criteria": "SPS to SMPS cable make and size",
            "inputLabel": "Value / Remarks"
          },
          {
            "id": "R-03",
            "item": "SPS to DG cable make and size",
            "criteria": "SPS to DG cable make and size",
            "inputLabel": "Value / Remarks"
          },
          {
            "id": "R-04",
            "item": "SMPS to BB cable make and size",
            "criteria": "SMPS to BB cable make and size",
            "inputLabel": "Value / Remarks"
          }
        ]
      }
    ],
    "photoRequirements": [
      {
        "id": "photo-1-in-time-audit-engineer-selfie-with-background-of-site",
        "title": "Photograph 1 - In time - audit engineer selfie with background of site",
        "requirement": "Photograph - 1 (In time - audit engineer selfie with background of site)",
        "limit": 4
      },
      {
        "id": "photo-2-la-and-strip-routing",
        "title": "Photograph 2 - LA & Strip routing",
        "requirement": "Photograph - 2 (LA & Strip routing)",
        "limit": 4
      },
      {
        "id": "photo-3-tower-legs-interconnections",
        "title": "Photograph 3 - Tower Legs interconnections",
        "requirement": "Photograph - 3 (Tower Legs interconnections)",
        "limit": 4
      },
      {
        "id": "photo-4-eb-meter-functional-and-mccb",
        "title": "Photograph 4 - EB Meter functional & MCCB",
        "requirement": "Photograph - 4 (EB Meter functional & MCCB )",
        "limit": 4
      },
      {
        "id": "photo-5-spd-installation",
        "title": "Photograph 5 - SPD installation",
        "requirement": "Photograph - 5 (SPD installation)",
        "limit": 4
      },
      {
        "id": "photo-6-pole-earthing",
        "title": "Photograph 6 - Pole Earthing",
        "requirement": "Photograph 6 -(Pole Earthing)",
        "limit": 4
      },
      {
        "id": "photo-7-earthpit-chambers",
        "title": "Photograph 7 - Earthpit chambers",
        "requirement": "Photograph - 7 (Earthpit chambers)",
        "limit": 4
      },
      {
        "id": "photo-8-earthing-value",
        "title": "Photograph 8 - Earthing value",
        "requirement": "Photograph - 8 (Earthing value)",
        "limit": 4
      },
      {
        "id": "photo-9-cable-tray-installation",
        "title": "Photograph 9 - Cable Tray installation",
        "requirement": "Photograph- 9 (Cable Tray installation)",
        "limit": 4
      },
      {
        "id": "photo-10-swtch-socket-installation",
        "title": "Photograph 10 - Swtch socket installation",
        "requirement": "Photograph - 10 (Swtch socket installation)",
        "limit": 4
      },
      {
        "id": "photo-11-fire-extinguisher",
        "title": "Photograph 11 - Fire Extinguisher",
        "requirement": "Photograph - 11 (Fire Extinguisher)",
        "limit": 4
      },
      {
        "id": "photo-12-earthing-of-fence-railling",
        "title": "Photograph 12 - Earthing of fence/Railling",
        "requirement": "Photograph - 12 (Earthing of fence/Railling )",
        "limit": 4
      },
      {
        "id": "photo-13-gi-strip-terminations",
        "title": "Photograph 13 - GI strip terminations",
        "requirement": "Photograph - 13 (GI strip terminations)",
        "limit": 4
      },
      {
        "id": "photo-14-egb-connections",
        "title": "Photograph 14 - EGB connections",
        "requirement": "Photograph - 14 (EGB connections )",
        "limit": 4
      },
      {
        "id": "photo-15-power-cable-routing",
        "title": "Photograph 15 - Power Cable routing",
        "requirement": "Photograph - 15 (Power Cable routing)",
        "limit": 4
      },
      {
        "id": "photo-16-gi-strip-routing",
        "title": "Photograph 16 - GI strip routing",
        "requirement": "Photograph - 16 (GI strip routing )",
        "limit": 4
      },
      {
        "id": "photo-17-ofc-duct",
        "title": "Photograph 17 - OFC Duct",
        "requirement": "Photograph - 17 (OFC Duct)",
        "limit": 4
      },
      {
        "id": "photo-18-out-time-selfie-with-overall-installation-at-background",
        "title": "Photograph 18 - Out time selfie with overall installation at background",
        "requirement": "Photograph - 18 (Out time selfie with overall installation at background )",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-inventory-list",
    "name": "Site Inventory Report",
    "revision": "Embedded",
    "source": "Inventory List.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "indus-site-id",
        "label": "Indus Site ID",
        "type": "text",
        "required": false
      },
      {
        "id": "opco-site-id",
        "label": "Opco Site ID",
        "type": "text",
        "required": false
      },
      {
        "id": "opco-name",
        "label": "Opco Name",
        "type": "text",
        "required": false
      },
      {
        "id": "site-address",
        "label": "Site Address",
        "type": "text",
        "required": false
      },
      {
        "id": "deployment-vendor",
        "label": "Deployment Vendor",
        "type": "text",
        "required": false
      }
    ],
    "sections": [
      {
        "id": "inventory-items",
        "title": "Inventory Items",
        "description": "Record make, serial number, size/capacity, quantity, and remarks for each site item.",
        "items": [
          {
            "id": "1",
            "item": "Tower",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "2",
            "item": "Shelter / Cage / Od Pad",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "3",
            "item": "PIU/PMU/iIPMS/SPS/ATS",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "4",
            "item": "LCU",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "5",
            "item": "SMPS",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "6",
            "item": "Modules",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "7",
            "item": "AC",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "8",
            "item": "DG",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "9",
            "item": "Battery Bank - VRLA / VRLA+",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "10",
            "item": "OD Battery Cabinet",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "11",
            "item": "Transmission Rack",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "12",
            "item": "DCDB",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          },
          {
            "id": "13",
            "item": "Others",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Make / Sr. No / Size / Quantity / Remarks"
          }
        ]
      }
    ],
    "photoRequirements": []
  },
  {
    "id": "tpl-li-ion-bb-acceptance-checklist",
    "name": "Li-ion Acceptance Checksheet",
    "revision": "Embedded",
    "source": "Li-ion BB Acceptance Checklist.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "country-circle",
        "label": "Country/Circle",
        "type": "text",
        "required": false
      },
      {
        "id": "district",
        "label": "District",
        "type": "text",
        "required": false
      },
      {
        "id": "project",
        "label": "Project",
        "type": "text",
        "required": false
      },
      {
        "id": "nb",
        "label": "NB",
        "type": "text",
        "required": false
      },
      {
        "id": "make",
        "label": "Make",
        "type": "text",
        "required": false
      },
      {
        "id": "li-ion",
        "label": "li-ion",
        "type": "text",
        "required": false
      },
      {
        "id": "capacity",
        "label": "Capacity",
        "type": "text",
        "required": false
      },
      {
        "id": "sl-no",
        "label": "Sl. No",
        "type": "text",
        "required": false
      },
      {
        "id": "date-of-installation",
        "label": "Date of installation",
        "type": "date",
        "required": false
      },
      {
        "id": "date-of-commissioning",
        "label": "Date of commissioning",
        "type": "date",
        "required": false
      }
    ],
    "sections": [],
    "photoRequirements": [
      {
        "id": "photo-1-in-time-audit-engineer-selfie-with-back-ground-of-li-ion-bb",
        "title": "Photograph 1 - In time - audit engineer selfie with back ground of Li-ion BB",
        "requirement": "Photograph - 1 (In time - audit engineer selfie with back ground of Li-ion BB)",
        "limit": 4
      },
      {
        "id": "photo-2-no-of-bb-installed-with-cabinet",
        "title": "Photograph 2 - No of BB installed with Cabinet",
        "requirement": "Photograph - 2 (No of BB installed with Cabinet)",
        "limit": 4
      },
      {
        "id": "photo-3-lib-capacity-and-no-of-module-in-smps-display",
        "title": "Photograph 3 - LiB capacity & No of module in SMPS Display",
        "requirement": "Photograph - 3 (LiB capacity & No of module in SMPS Display)",
        "limit": 4
      },
      {
        "id": "photo-4-body-earthing-lib-and-od-cabinet",
        "title": "Photograph 4 - Body Earthing-LiB and OD cabinet",
        "requirement": "Photograph - 4 (Body Earthing-LiB and OD cabinet)",
        "limit": 4
      },
      {
        "id": "photo-5-lib-showing-interconnections-modules",
        "title": "Photograph 5 - LiB showing interconnections modules",
        "requirement": "Photograph - 5 (LiB showing interconnections modules)",
        "limit": 4
      },
      {
        "id": "photo-6-lib-power-terminations-at-bus-bar-and-smps",
        "title": "Photograph 6 - LiB power terminations at Bus Bar & SMPS",
        "requirement": "Photograph - 6 (LiB power terminations at Bus Bar & SMPS)",
        "limit": 4
      },
      {
        "id": "photo-7-bb-overall-voltage",
        "title": "Photograph 7 - BB overall voltage",
        "requirement": "Photograph - 7 (BB overall voltage)",
        "limit": 4
      },
      {
        "id": "photo-8-lib-to-smps-cable-sizes",
        "title": "Photograph 8 - LiB to SMPS cable sizes",
        "requirement": "Photograph - 8 (LiB to SMPS cable sizes)",
        "limit": 4
      },
      {
        "id": "photo-9-lib-to-bus-bar-cable-routing",
        "title": "Photograph 9 - LiB to Bus Bar cable routing",
        "requirement": "Photograph - 9 (LiB to Bus Bar cable routing)",
        "limit": 4
      },
      {
        "id": "photo-10-bms-indications",
        "title": "Photograph 10 - BMS indications",
        "requirement": "Photograph - 10 (BMS indications)",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-rtp-pole-check-sheet-a-r1",
    "name": "Roof Top Pole site Acceptance Checksheet",
    "revision": "Embedded",
    "source": "RTP Pole Check Sheet A R1.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "site-id-name",
        "label": "Site ID/Name",
        "type": "text",
        "required": false
      },
      {
        "id": "site-name-address",
        "label": "Site Name/Address",
        "type": "text",
        "required": false
      },
      {
        "id": "country",
        "label": "Country",
        "type": "text",
        "required": false
      },
      {
        "id": "pole-height",
        "label": "Pole Height",
        "type": "text",
        "required": false
      },
      {
        "id": "wind-speed",
        "label": "Wind Speed",
        "type": "text",
        "required": false
      },
      {
        "id": "date-of-inspection",
        "label": "Date of Inspection",
        "type": "date",
        "required": false
      },
      {
        "id": "partner-tsp-name",
        "label": "Partner (TSP) Name",
        "type": "text",
        "required": false
      }
    ],
    "sections": [
      {
        "id": "roof-top-pole-site-acceptance-checksheet",
        "title": "Roof Top Pole site Acceptance Checksheet",
        "description": "",
        "items": [
          {
            "id": "1",
            "item": "Feasibility & PDI",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "1.1",
            "item": "Stability Certificate",
            "criteria": "SSC from approved agency with site-specific details.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "1.2",
            "item": "PDI Verification",
            "criteria": "PDI Report checked; PDI stamps present on pole.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "1.3",
            "item": "NDT Report",
            "criteria": "Existing RCC concrete min. M20 grade and slab thickness ≥110 mm as confirmed through structural report / NDT",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "1.4",
            "item": "Pole Height / Design",
            "criteria": "Pole height verified as per approved design (3/4/6/9 m)",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "1.5",
            "item": "Pole & Bracing Location",
            "criteria": "Poles and bracings are installed over the RCC structure as per the approved layout.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "2",
            "item": "Structural Erection",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "2.1",
            "item": "Hilti Anchoring",
            "criteria": "HIT-V M12; HY200 chemical (check expiry); 75mm depth, Anchor dia and length must be as per approved drawing requirement.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "2.2",
            "item": "Pole installation as per Drawing",
            "criteria": "Pole installation strictly as per approved drawing & guideline",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "2.3",
            "item": "Bore Hole Quality",
            "criteria": "Cleaned twice with air and brush; no over-drilling.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "2.4",
            "item": "Member Integrity",
            "criteria": "No crack, dent, deformation, welding cut, gas cutting, hole enlargement or damage.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "2.5",
            "item": "Galvanization",
            "criteria": "85 microns thickness as per IS: 4759 & 2629.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "2.6",
            "item": "Tightening",
            "criteria": "Torque applied as per grade (e.g., M16/8.8 = 175 Nm).",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "2.7",
            "item": "Leveling",
            "criteria": "Verticality within 1 in 360; checked via plumb line.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "2.8",
            "item": "Safety Guard Ribs",
            "criteria": "Properly fixed per drawing",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "3",
            "item": "Civil & Foundation",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "3.1",
            "item": "Concrete Grade",
            "criteria": "M20 grade for slabs, columns, and pedestals.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "3.2",
            "item": "Steel Verification",
            "criteria": "Rebar size and count match the approved drawing.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "3.3",
            "item": "Shuttering",
            "criteria": "Oil-based, line-leveled, tightened with no gaps.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "3.4",
            "item": "Material Quality",
            "criteria": "Fresh cement (OPC/PPC); Coarse and fine aggregates are free from impurities.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "4",
            "item": "Earthing",
            "criteria": "Fill the required field values and remarks.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "4.1",
            "item": "Pit Scheme",
            "criteria": "Chemical earthing only; pit distance ≥ 3 meters.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "4.2",
            "item": "Electrode Spec",
            "criteria": "Solid steel rod; 12.5mm dia x 3m length; UL marked.",
            "inputLabel": "Ref # / Remarks"
          },
          {
            "id": "4.3",
            "item": "Pit Chamber",
            "criteria": "Fiber make or Pre-cast (Hume pipe 300x1000mm).",
            "inputLabel": "Ref # / Remarks"
          }
        ]
      },
      {
        "id": "audit-compliance",
        "title": "III. Mandatory Audit Compliance",
        "description": "Answer each compliance requirement as OK, Not OK, or N/A and add complete details where needed.",
        "items": [
          {
            "id": "AC-01",
            "item": "Drawing Compliance",
            "criteria": "Drawing Compliance: Every stage (Site Selection, Erection, Civil, and Earthing) uses \"As per approved drawing\" as the primary pass/fail benchmark.",
            "inputLabel": "Complete Details / Remarks"
          },
          {
            "id": "AC-02",
            "item": "Verification of \"Stamping\"",
            "criteria": "Verification of \"Stamping\": The requirement to verify a physical \"stamp\" is consistent for structural members (PDI stamp), pipe sections (IS 1161 stamp), and electrodes (UL/Manufacturer marking).",
            "inputLabel": "Complete Details / Remarks"
          },
          {
            "id": "AC-03",
            "item": "Presence During Execution",
            "criteria": "Presence During Execution: High-stakes activities, including Hilti chemical grouting, steel rebaring, and concreting, are strictly required to be performed in the presence of the audit engineer.",
            "inputLabel": "Complete Details / Remarks"
          },
          {
            "id": "AC-04",
            "item": "Tool-Based Verification",
            "criteria": "Tool-Based Verification: Physical measurements are not solely visual; specific tools like Torque Wrenches, Spirit Levels, Plumb Lines, and Elcometers are required for validation.",
            "inputLabel": "Complete Details / Remarks"
          }
        ]
      }
    ],
    "photoRequirements": [
      {
        "id": "photo-1-start-selfie",
        "title": "1. Start Selfie",
        "requirement": "Audit engineer with the site background clearly visible at the start of the inspection.",
        "limit": 4
      },
      {
        "id": "photo-2-pdi-proof",
        "title": "2. PDI Proof",
        "requirement": "Nuance: A clear, legible close-up of the PDI stamp on the pole structure vs. the PDI report.",
        "limit": 4
      },
      {
        "id": "photo-3-hilti-execution",
        "title": "3. Hilti Execution",
        "requirement": "Nuance: Capturing the cleaning of the bore hole (brushing/blowing) and the expiry date on the HY200 chemical tube.",
        "limit": 4
      },
      {
        "id": "photo-4-alignment",
        "title": "4. Alignment",
        "requirement": "Spirit level or plumb line in two perpendicular directions showing verticality compliance.",
        "limit": 4
      },
      {
        "id": "photo-5-torque-check",
        "title": "5. Torque Check",
        "requirement": "Nuance: Photo of the Torque Wrench applied to a bolt showing the specific Nm value achieved.",
        "limit": 4
      },
      {
        "id": "photo-6-reinforcement",
        "title": "6. Reinforcement",
        "requirement": "Close-up of the steel rebar count and size before concreting to match the structural drawing.",
        "limit": 4
      },
      {
        "id": "photo-7-material-trace",
        "title": "7. Material Trace",
        "requirement": "Labels on cement bags showing brand, grade, and date of manufacture to ensure they are not expired.",
        "limit": 4
      },
      {
        "id": "photo-8-earthing-detail",
        "title": "8. Earthing Detail",
        "requirement": "Nuance: The UL marking and manufacturer name engraved on the electrode before it is lowered into the pit.",
        "limit": 4
      },
      {
        "id": "photo-9-finish-state",
        "title": "9. Finish State",
        "requirement": "Overall view of the site showing proper workmanship, non-visible reinforcement, and pedestals.",
        "limit": 4
      },
      {
        "id": "photo-10-exit-selfie",
        "title": "10. Exit Selfie",
        "requirement": "Engineer with the completed, rectified, or inspected site installation in the background.",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-site-electrification-acceptance-checksheet",
    "name": "Site Electrification Acceptance Checksheet",
    "revision": "Embedded",
    "source": "Site Electrification Acceptance Checksheet.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "country-circle",
        "label": "Country/Circle",
        "type": "text",
        "required": false
      },
      {
        "id": "district",
        "label": "District",
        "type": "text",
        "required": false
      },
      {
        "id": "date-of-completion",
        "label": "Date of Completion",
        "type": "date",
        "required": false
      },
      {
        "id": "ormer-and-its-ratings-as-per-approved-plan-boq",
        "label": "ormer & its ratings as per approved plan/ BOQ",
        "type": "text",
        "required": false
      },
      {
        "id": "no-of-poles-used-for-cable-routing",
        "label": "No of poles used for cable routing",
        "type": "text",
        "required": false
      },
      {
        "id": "ht-conductor-or-cable-type-and-size",
        "label": "HT conductor or cable type & size",
        "type": "text",
        "required": false
      },
      {
        "id": "cable-from-transformer-lt-line-to-meter",
        "label": "Cable from transformer / LT line to Meter",
        "type": "text",
        "required": false
      }
    ],
    "sections": [
      {
        "id": "site-electrification-acceptance-installation-requirements",
        "title": "Significant Installation Phases & Requirements",
        "description": "Capture the listed installation values or remarks from the original check sheet.",
        "items": [
          {
            "id": "R-01",
            "item": "Transformer & its ratings as per approved plan/ BOQ",
            "criteria": "Transformer & its ratings as per approved plan/ BOQ:",
            "inputLabel": "Value / Remarks"
          },
          {
            "id": "R-02",
            "item": "No of poles used for cable routing",
            "criteria": "No of poles used for cable routing:",
            "inputLabel": "Value / Remarks"
          },
          {
            "id": "R-03",
            "item": "HT conductor or cable type & size",
            "criteria": "HT conductor or cable type & size:",
            "inputLabel": "Value / Remarks"
          },
          {
            "id": "R-04",
            "item": "Cable from transformer / LT line to Meter",
            "criteria": "Cable from transformer / LT line to Meter:",
            "inputLabel": "Value / Remarks"
          }
        ]
      }
    ],
    "photoRequirements": [
      {
        "id": "photo-1-in-time-audit-engineer-selfie-with-background-of-site",
        "title": "Photograph 1 - In time - audit engineer selfie with background of site",
        "requirement": "Photograph - 1 (In time - audit engineer selfie with background of site)",
        "limit": 4
      },
      {
        "id": "photo-2-transformer-installed",
        "title": "Photograph 2 - Transformer installed",
        "requirement": "Photograph - 2 (Transformer installed)",
        "limit": 4
      },
      {
        "id": "photo-3-grounding-of-all-metallic-bodies-structures-transformer",
        "title": "Photograph 3 - Grounding of all metallic bodies/structures/ transformer",
        "requirement": "Photograph - 3 (Grounding of all metallic bodies/structures/ transformer)",
        "limit": 4
      },
      {
        "id": "photo-4-eb-meter-installation-and-functional",
        "title": "Photograph 4 - EB meter installation & functional",
        "requirement": "Photograph - 4 (EB meter installation & functional)",
        "limit": 4
      },
      {
        "id": "photo-5-cable-routing-no-cable-sag",
        "title": "Photograph 5 - Cable routing/No cable sag",
        "requirement": "Photograph - 5 (Cable routing/No cable sag)",
        "limit": 4
      },
      {
        "id": "photo-6-poles-installation",
        "title": "Photograph 6 - Poles Installation",
        "requirement": "Photograph 6 -(Poles Installation)",
        "limit": 4
      },
      {
        "id": "photo-7-gi-poles-earthing",
        "title": "Photograph 7 - GI poles earthing",
        "requirement": "Photograph - 7 (GI poles earthing)",
        "limit": 4
      },
      {
        "id": "photo-8-cable-termination-at-eb-meter-and-mccb",
        "title": "Photograph 8 - Cable termination at EB meter & MCCB",
        "requirement": "Photograph - 8 (Cable termination at EB meter & MCCB)",
        "limit": 4
      },
      {
        "id": "photo-9-go-switch-installation",
        "title": "Photograph 9 - GO switch installation",
        "requirement": "Photograph - 9 (GO switch installation )",
        "limit": 4
      },
      {
        "id": "photo-10-voltage-between-nuetral-n-and-earth",
        "title": "Photograph 10 - Voltage between Nuetral (N) & Earth",
        "requirement": "Photograph - 10 (Voltage between Nuetral (N) & Earth)",
        "limit": 4
      },
      {
        "id": "photo-11-voltage-at-eb-meter-mccb-input",
        "title": "Photograph 11 - Voltage at EB meter/MCCB input",
        "requirement": "Photograph - 11 (Voltage at EB meter/MCCB input)",
        "limit": 4
      },
      {
        "id": "photo-12-out-time-selfie-with-overall-installation-at-background",
        "title": "Photograph 12 - Out time selfie with overall installation at background",
        "requirement": "Photograph - 12 (Out time selfie with overall installation at background )",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-smps-acceptance-checksheet",
    "name": "SMPS Acceptance Check Sheet",
    "revision": "Embedded",
    "source": "SMPS Acceptance Checksheet.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "country-circle-name",
        "label": "Country/Circle Name",
        "type": "text",
        "required": false
      },
      {
        "id": "district",
        "label": "District",
        "type": "text",
        "required": false
      },
      {
        "id": "project",
        "label": "Project",
        "type": "text",
        "required": false
      },
      {
        "id": "make-of-smps",
        "label": "Make of SMPS",
        "type": "text",
        "required": false
      },
      {
        "id": "type",
        "label": "Type",
        "type": "text",
        "required": false
      },
      {
        "id": "id-od-smps-model",
        "label": "ID / OD SMPS Model",
        "type": "text",
        "required": false
      },
      {
        "id": "ultimate-capacity-of-smps",
        "label": "Ultimate capacity of SMPS",
        "type": "text",
        "required": false
      },
      {
        "id": "no-of-rm",
        "label": "No of RM",
        "type": "text",
        "required": false
      },
      {
        "id": "rm-total-capacity",
        "label": "RM total capacity",
        "type": "text",
        "required": false
      },
      {
        "id": "sl-no",
        "label": "Sl. No",
        "type": "text",
        "required": false
      },
      {
        "id": "rm-sl-no",
        "label": "RM Sl No",
        "type": "text",
        "required": false
      },
      {
        "id": "date-of-installation",
        "label": "Date of Installation",
        "type": "date",
        "required": false
      },
      {
        "id": "date-of-commissioning",
        "label": "Date of Commissioning",
        "type": "date",
        "required": false
      }
    ],
    "sections": [],
    "photoRequirements": [
      {
        "id": "photo-1-in-time-audit-engineer-selfie-with-back-ground-of-next-gen-smps-",
        "title": "Photograph 1 - In time - audit engineer selfie with back ground of Next Gen SMPS with door open",
        "requirement": "Photograph -1 (In time - audit engineer selfie with back ground of Next Gen SMPS with door open)",
        "limit": 4
      },
      {
        "id": "photo-2-body-earthing",
        "title": "Photograph 2 - body Earthing",
        "requirement": "Photograph - 2 (body Earthing)",
        "limit": 4
      },
      {
        "id": "photo-3-ve-bus-bar-earthing",
        "title": "Photograph 3 - +VE bus bar earthing",
        "requirement": "Photograph - 3 (+VE bus bar earthing)",
        "limit": 4
      },
      {
        "id": "photo-4-smps-display-showing-all-rm-o-p",
        "title": "Photograph 4 - SMPS Display showing all RM O/P",
        "requirement": "Photograph - 4 (SMPS Display showing all RM O/P)",
        "limit": 4
      },
      {
        "id": "photo-5-lvd-blvd-setting",
        "title": "Photograph 5 - LVD/BLVD setting",
        "requirement": "Photograph - 5 (LVD/BLVD setting)",
        "limit": 4
      },
      {
        "id": "photo-6-temp-compensation-enabled",
        "title": "Photograph 6 - Temp compensation enabled",
        "requirement": "Photograph 6 -(Temp compensation enabled)",
        "limit": 4
      },
      {
        "id": "photo-7-smps-i-p-power-connection",
        "title": "Photograph 7 - SMPS I/P power connection",
        "requirement": "Photograph - 7 (SMPS I/P power connection)",
        "limit": 4
      },
      {
        "id": "photo-8-smps-battery-cable-termination",
        "title": "Photograph 8 - SMPS Battery cable termination",
        "requirement": "Photograph - 8 (SMPS Battery cable termination)",
        "limit": 4
      },
      {
        "id": "photo-9-controller-display-with-ac-input-voltage-dc-o-p-voltage-load-cur",
        "title": "Photograph 9 - Controller display with AC input voltage, DC O/P voltage, Load current, Battery current",
        "requirement": "Photograph- 9 (Controller display with AC input voltage, DC O/P voltage, Load current, Battery current",
        "limit": 4
      },
      {
        "id": "photo-10-out-time-selfie-with-smps-overall-installation-at-background",
        "title": "Photograph 10 - Out time selfie with SMPS overall installation at background",
        "requirement": "Photograph - 10 (Out time selfie with SMPS overall installation at background )",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-solar-acceptance-checksheet",
    "name": "Solar string and MPPT Acceptance Checksheet",
    "revision": "Embedded",
    "source": "Solar Acceptance Checksheet.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "country-circle",
        "label": "Country/Circle",
        "type": "text",
        "required": false
      },
      {
        "id": "district",
        "label": "District",
        "type": "text",
        "required": false
      },
      {
        "id": "date-of-completion",
        "label": "Date of Completion",
        "type": "date",
        "required": false
      },
      {
        "id": "smps-to-mppt-cable-make-and-size",
        "label": "SMPS to MPPT cable make and size",
        "type": "text",
        "required": false
      },
      {
        "id": "mppt-to-solar-array-cable-make-and-size",
        "label": "MPPT to solar array cable make and size",
        "type": "text",
        "required": false
      }
    ],
    "sections": [
      {
        "id": "solar-panel-and-mppt-check-sheet-installation-requirements",
        "title": "Significant Installation Phases & Requirements",
        "description": "Capture the listed installation values or remarks from the original check sheet.",
        "items": [
          {
            "id": "R-01",
            "item": "SMPS to MPPT cable make and size",
            "criteria": "SMPS to MPPT cable make and size:",
            "inputLabel": "Value / Remarks"
          },
          {
            "id": "R-02",
            "item": "MPPT to solar array cable make and size",
            "criteria": "MPPT to solar array cable make and size:",
            "inputLabel": "Value / Remarks"
          }
        ]
      }
    ],
    "photoRequirements": [
      {
        "id": "photo-1-in-time-audit-engineer-selfie-with-back-ground-of-solar",
        "title": "Photograph 1 - In time - audit engineer selfie with back ground of Solar",
        "requirement": "Photograph - 1 (In time - audit engineer selfie with back ground of Solar)",
        "limit": 4
      },
      {
        "id": "photo-2-complete-solar-string-south-facing",
        "title": "Photograph 2 - Complete Solar string south facing",
        "requirement": "Photograph - 2 (Complete Solar string south facing)",
        "limit": 4
      },
      {
        "id": "photo-3-mppt-shelf",
        "title": "Photograph 3 - MPPT shelf",
        "requirement": "Photograph - 3 (MPPT shelf)",
        "limit": 4
      },
      {
        "id": "photo-4-body-earthing-solar-structure",
        "title": "Photograph 4 - Body Earthing-Solar structure",
        "requirement": "Photograph - 4 (Body Earthing-Solar structure)",
        "limit": 4
      },
      {
        "id": "photo-5-solar-intermodule-connections",
        "title": "Photograph 5 - Solar intermodule connections",
        "requirement": "Photograph - 5 (Solar intermodule connections)",
        "limit": 4
      },
      {
        "id": "photo-6-mppt-earthing",
        "title": "Photograph 6 - MPPT earthing",
        "requirement": "Photograph - 6 (MPPT earthing)",
        "limit": 4
      },
      {
        "id": "photo-7-mppt-i-p-voltage",
        "title": "Photograph 7 - MPPT I/P Voltage",
        "requirement": "Photograph - 7 (MPPT I/P Voltage)",
        "limit": 4
      },
      {
        "id": "photo-8-mppt-o-p-voltage",
        "title": "Photograph 8 - MPPT O/P voltage",
        "requirement": "Photograph 8 -(MPPT O/P voltage)",
        "limit": 4
      },
      {
        "id": "photo-9-smps-display-indicating-solar-current-voltage",
        "title": "Photograph 9 - SMPS display indicating solar current/voltage",
        "requirement": "Photograph - 9 (SMPS display indicating solar current/voltage)",
        "limit": 4
      },
      {
        "id": "photo-10-mppt-communication-cable",
        "title": "Photograph 10 - MPPT communication cable",
        "requirement": "Photograph - 10 (MPPT communication cable)",
        "limit": 4
      },
      {
        "id": "photo-13-modem-installation",
        "title": "Photograph 13 - Modem installation",
        "requirement": "Photograph - 13 (Modem installation)",
        "limit": 4
      },
      {
        "id": "photo-14-solar-panel-tilt-azimuth-mesurement",
        "title": "Photograph 14 - Solar panel tilt/azimuth mesurement",
        "requirement": "Photograph - 14 (Solar panel tilt/azimuth mesurement )",
        "limit": 4
      },
      {
        "id": "photo-15-mppt-indications",
        "title": "Photograph 15 - MPPT indications",
        "requirement": "Photograph - 15 (MPPT indications)",
        "limit": 4
      },
      {
        "id": "photo-16-out-time-selfie-with-bb-overall-installation-at-background",
        "title": "Photograph 16 - Out time selfie with BB overall installation at background",
        "requirement": "Photograph - 16 (Out time selfie with BB overall installation at background )",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-sps-ats-acceptance-checksheet",
    "name": "SPS/ATS Acceptance Checksheet",
    "revision": "Embedded",
    "source": "SPS ATS Acceptance Checksheet.xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "country",
        "label": "Country",
        "type": "text",
        "required": false
      },
      {
        "id": "area",
        "label": "Area",
        "type": "text",
        "required": false
      },
      {
        "id": "project",
        "label": "Project",
        "type": "text",
        "required": false
      },
      {
        "id": "make-of-sps-ats",
        "label": "Make of SPS/ATS",
        "type": "text",
        "required": false
      },
      {
        "id": "capacity",
        "label": "Capacity",
        "type": "text",
        "required": false
      },
      {
        "id": "sps-ats",
        "label": "SPS/ATS",
        "type": "text",
        "required": false
      },
      {
        "id": "1-ph-3-ph",
        "label": "1-PH/3-PH",
        "type": "text",
        "required": false
      },
      {
        "id": "sl-no",
        "label": "Sl. No",
        "type": "text",
        "required": false
      },
      {
        "id": "date-of-installation",
        "label": "Date of installation",
        "type": "date",
        "required": false
      },
      {
        "id": "date-of-commissioning",
        "label": "Date of commissioning",
        "type": "date",
        "required": false
      }
    ],
    "sections": [],
    "photoRequirements": [
      {
        "id": "photo-1-in-time-audit-engineer-selfie-with-back-ground-of-sps-ats",
        "title": "Photograph 1 - In time - audit engineer selfie with back ground of SPS/ATS",
        "requirement": "Photograph - 1 (In time - audit engineer selfie with back ground of SPS/ATS)",
        "limit": 4
      },
      {
        "id": "photo-2-sps-ats-body-earthing",
        "title": "Photograph 2 - SPS/ATS Body earthing",
        "requirement": "Photograph - 2 (SPS/ATS Body earthing)",
        "limit": 4
      },
      {
        "id": "photo-3-sps-ats-eb-cable-terminations",
        "title": "Photograph 3 - SPS/ATS EB cable terminations",
        "requirement": "Photograph - 3 (SPS/ATS EB cable terminations)",
        "limit": 4
      },
      {
        "id": "photo-4-sps-ats-mounting",
        "title": "Photograph 4 - SPS/ATS mounting",
        "requirement": "Photograph - 4 (SPS/ATS mounting)",
        "limit": 4
      },
      {
        "id": "photo-5-sps-ats-internal-bus-bar-earthing",
        "title": "Photograph 5 - SPS/ATS Internal bus bar earthing",
        "requirement": "Photograph - 5 (SPS/ATS Internal bus bar earthing)",
        "limit": 4
      },
      {
        "id": "photo-6-sps-ats-output-terminations",
        "title": "Photograph 6 - SPS/ATS Output terminations",
        "requirement": "Photograph 6 -(SPS/ATS Output terminations)",
        "limit": 4
      },
      {
        "id": "photo-7-sps-ats-display-with-input-output-parameter",
        "title": "Photograph 7 - SPS/ATS display with input/Output parameter",
        "requirement": "Photograph - 7 (SPS/ATS display with input/Output parameter)",
        "limit": 4
      },
      {
        "id": "photo-8-out-time-selfie-with-overall-installation-at-background",
        "title": "Photograph 8 - Out time selfie with overall installation at background",
        "requirement": "Photograph - 8 (Out time selfie with overall installation at background)",
        "limit": 4
      }
    ]
  },
  {
    "id": "tpl-tower-check-sheet-a-r1-1",
    "name": "T-1 Stage: Tower Installation Audit Report",
    "revision": "Embedded",
    "source": "Tower Check Sheet-A R1 (1).xlsx",
    "siteFields": [
      {
        "id": "site_id",
        "label": "Site ID",
        "type": "text",
        "required": true
      },
      {
        "id": "site_name",
        "label": "Site Name",
        "type": "text"
      },
      {
        "id": "country_circle",
        "label": "Country / Circle",
        "type": "text"
      },
      {
        "id": "district_area",
        "label": "District / Area",
        "type": "text"
      },
      {
        "id": "site_type",
        "label": "Site Type",
        "type": "text"
      },
      {
        "id": "tower_type",
        "label": "Tower Type",
        "type": "text"
      },
      {
        "id": "solution_type",
        "label": "Solution Type",
        "type": "text"
      },
      {
        "id": "build_partner",
        "label": "Build Partner",
        "type": "text"
      },
      {
        "id": "quality_audit_agency",
        "label": "Quality Audit Agency",
        "type": "text"
      },
      {
        "id": "audit_engineer",
        "label": "Audit Engineer",
        "type": "text",
        "required": true
      },
      {
        "id": "audit_date",
        "label": "Date of Audit",
        "type": "date",
        "required": true
      },
      {
        "id": "audit_start_time",
        "label": "Audit Start Time",
        "type": "time"
      },
      {
        "id": "audit_end_time",
        "label": "Audit End Time",
        "type": "time"
      },
      {
        "id": "t-1-stage",
        "label": "T-1 Stage",
        "type": "text",
        "required": false
      },
      {
        "id": "site-details",
        "label": "Site Details",
        "type": "text",
        "required": false
      },
      {
        "id": "site-id-name",
        "label": "Site ID / Name",
        "type": "text",
        "required": false
      },
      {
        "id": "tower-height",
        "label": "Tower Height",
        "type": "text",
        "required": false
      }
    ],
    "sections": [
      {
        "id": "1-administrative-and-site-readiness",
        "title": "1. Administrative & Site Readiness",
        "description": "Verification of documents, team availability, and foundational prerequisites.",
        "items": [
          {
            "id": "1.1",
            "item": "Drawing Compliance",
            "criteria": "Planning approved drawing and site layout available.",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.2",
            "item": "Wind Zone",
            "criteria": "Foundation/Tower design matches wind zone .",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.3",
            "item": "Team Readiness",
            "criteria": "Tower supervisor and erection team present.",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.4",
            "item": "PDI Approved",
            "criteria": "Tower is PDI Approved and Release not available at site",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.5",
            "item": "Curing Gap",
            "criteria": "Minimum 7-day curing gap maintained between foundation casting and erection.",
            "inputLabel": "Remarks"
          },
          {
            "id": "1.6",
            "item": "Erection Tools",
            "criteria": "Calibrated torque wrench available on-site.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "2-foundation-interface-and-base-arrangement",
        "title": "2. Foundation Interface & Base Arrangement",
        "description": "Ensuring the structural interface between the concrete and the steel tower is level and secure.",
        "items": [
          {
            "id": "2.1",
            "item": "Base Leveling",
            "criteria": "Level difference between extreme ends within +/- 5 mm via water level tube.",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.2",
            "item": "Bolt Hardware",
            "criteria": "Base nut, main nut, lock nuts, and washers installed of appropriate grade (5.6/8.8) and per drawing requirement.",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.3",
            "item": "Thread Projection",
            "criteria": "Minimum 3-5 threads visible after the locknut.",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.4",
            "item": "Grouting",
            "criteria": "Base plate grouting completed using approved Shrinkkomp.",
            "inputLabel": "Remarks"
          },
          {
            "id": "2.5",
            "item": "Bolt Finalization",
            "criteria": "Marking done with permanent markers; threads chiseled/flared (1.2x diameter) after final acceptance.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "3-structural-integrity-and-mechanical-compliance",
        "title": "3. Structural Integrity & Mechanical Compliance",
        "description": "Consolidated audit of members, joints, and fasteners.",
        "items": [
          {
            "id": "3.1",
            "item": "Member Condition",
            "criteria": "No rusted, swapped, bent, dented, or locally fabricated members.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.2",
            "item": "Material Grade",
            "criteria": "Pipe sections conform to IS 1161, Grade YST 240 / 310 (as per drawing requirement), Angle section confirms to IS 2062, YST 250 Gr.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.3",
            "item": "Joint Gaps",
            "criteria": "No gaps in main leg flange-to-flange joints; no packing washers used.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.4",
            "item": "Welding",
            "criteria": "Welding on base and stiffener plates is continuous and meets drawing thickness.",
            "inputLabel": "Remarks"
          },
          {
            "id": "3.5",
            "item": "Panel Completion",
            "criteria": "All Panels (legs, bracings, hardware) installed as per drawing.",
            "inputLabel": "Remarks"
          }
        ]
      },
      {
        "id": "5-ancillary-and-safety-systems",
        "title": "5. Ancillary & Safety Systems",
        "description": "Audit of access systems and protective equipment.",
        "items": [
          {
            "id": "5.1",
            "item": "Ladders",
            "criteria": "Climbing/Cable ladders arranged per layout; step-to-step distance is uniform.",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.2",
            "item": "Safety Hoops",
            "criteria": "Safety hoops and vertical strips properly fixed; no missing rings.",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.3",
            "item": "Platforms",
            "criteria": "Resting and working platforms fixed at correct heights; protection railings installed.",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.4",
            "item": "Verticality",
            "criteria": "Verticality checked as per the darwing requirement",
            "inputLabel": "Remarks"
          },
          {
            "id": "5.5",
            "item": "LA & Lighting",
            "criteria": "Lightning Arrestor installed with insulator; Earth strip connected; Aviation lamp functional.",
            "inputLabel": "Remarks"
          }
        ]
      }
    ],
    "photoRequirements": [
      {
        "id": "photo-p-01-audit-in-time",
        "title": "P-01 - Audit In-Time",
        "requirement": "Engineer selfie with site background before start.",
        "limit": 4
      },
      {
        "id": "photo-p-02-material-cert",
        "title": "P-02 - Material Cert",
        "requirement": "Close-up of PDI Stamp on tower base plate or leg members.",
        "limit": 4
      },
      {
        "id": "photo-p-03-leg-leveling",
        "title": "P-03 - Leg Leveling",
        "requirement": "Water level tube across extreme legs showing +/- 10mm tolerance.",
        "limit": 4
      },
      {
        "id": "photo-p-04-hardware-detail",
        "title": "P-04 - Hardware Detail",
        "requirement": "Close-up of foundation bolts showing 3-5 threads and locknuts.",
        "limit": 4
      },
      {
        "id": "photo-p-05-torque-wrench",
        "title": "P-05 - Torque Wrench",
        "requirement": "Torque wrench applied to main leg and bracing joints.",
        "limit": 4
      },
      {
        "id": "photo-p-06-torque-scale",
        "title": "P-06 - Torque Scale",
        "requirement": "Close-up of the wrench scale showing the specific Nm setting.",
        "limit": 4
      },
      {
        "id": "photo-p-07-joint-integrity",
        "title": "P-07 - Joint Integrity",
        "requirement": "Flange-to-flange joint photo showing zero gap and no washers.",
        "limit": 4
      },
      {
        "id": "photo-p-08-verticality",
        "title": "P-08 - Verticality",
        "requirement": "View looking up showing ladders, cable tray, and safety hoops.",
        "limit": 4
      },
      {
        "id": "photo-p-09-safety-systems",
        "title": "P-09 - Safety Systems",
        "requirement": "Close-ups of LA insulator, earth strip connection, and aviation lamp.",
        "limit": 4
      },
      {
        "id": "photo-p-10-audit-out-time",
        "title": "P-10 - Audit Out-Time",
        "requirement": "Engineer selfie with completed tower to mark the finish.",
        "limit": 4
      }
    ]
  }
];
