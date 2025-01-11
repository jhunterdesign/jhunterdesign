// Full case study write-ups for projects
const projects = [
    {
        id: "project1",
        title: "Configuring VPC Network Peering",
        description: "Set up VPC peering for secure private communication between networks using internal IPs.",
        tools: "Google Cloud Console, SSH Terminal",
        details: `
            <p>This lab involved configuring peering between two VPC networks (mynetwork and privatenet), verifying private communication, and testing internal IP connectivity to reduce costs and enhance security.</p>
            <ul>
                <li>Verified non-overlapping IP ranges for compatibility.</li>
                <li>Configured bidirectional peering between networks.</li>
                <li>Confirmed private communication via internal IPs and DNS resolution.</li>
                <li>Decommissioned peering to observe its impact on connectivity.</li>
            </ul>
        `
    },
    {
        id: "project2",
        title: "Rackspace Cybersecurity Challenge I",
        description: "Resolved cloud storage vulnerabilities and applied <b>ISO/IEC 27001:2013</b> compliance standards.",
        tools: "Google Cloud Security Command Center, IAM, Policy Analyzer",
        details: `
            <p>As a Client Cybersecurity Engineer for Cymbal Bank, I:</p>
            <ul>
                <li>Identified misconfigured storage buckets containing sensitive data.</li>
                <li>Implemented uniform access control and removed public permissions.</li>
                <li>Created custom IAM roles to restrict access, adhering to least privilege principles.</li>
                <li>Verified and documented security improvements.</li>
            </ul>
        `
    },
    {
        id: "project3",
        title: "Department of the Treasury Cybersecurity Challenge Labs",
        description: "Identified and mitigated vulnerabilities using <b>NIST 800-53 R4 framework</b>.",
        tools: "Google Cloud SCC, Compute Engine, Firewall Configuration",
        details: `
            <p>This challenge lab focused on securing financial data by:</p>
            <ul>
                <li>Improving compliance from 62% to 85% through vulnerability remediation.</li>
                <li>Enhancing firewall rules to limit unauthorized access.</li>
                <li>Securing Cloud Storage buckets by removing public access permissions.</li>
                <li>Restricting user-level access on Compute Engine instances.</li>
            </ul>
        `
    },
];

// Function to render the timeline
function renderTimeline() {
    const timeline = document.querySelector(".timeline");
    projects.forEach((project) => {
        const item = document.createElement("div");
        item.classList.add("timeline-item");
        item.innerHTML = `
            <h3 onclick="toggleDetails('${project.id}')">${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Tools:</strong> ${project.tools}</p>
            <div id="${project.id}" class="details">${project.details}</div>
        `;
        timeline.appendChild(item);
    });
}

// Function to toggle details visibility
function toggleDetails(itemId) {
    const item = document.getElementById(itemId);
    item.classList.toggle("visible");
}

// Initialize the timeline on page load
document.addEventListener("DOMContentLoaded", renderTimeline);
