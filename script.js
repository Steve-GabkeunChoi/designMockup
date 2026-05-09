const projects = [
  {
    id: "EDU-2826-848",
    customer: "네이버클라우드",
    title: "RAG 파이프라인 부트캠프",
    date: "5/11 - 15",
    instructor: "이서영",
    hours: "20h",
    status: "진행중",
    type: "progress",
    grade: "S",
    comment: 3
  },
  {
    id: "EDU-2826-8476",
    customer: "LG CNS",
    title: "K8s 운영 실무",
    date: "5/11 - 13",
    instructor: "조현수",
    hours: "24h",
    status: "진행중",
    type: "progress",
    grade: "S",
    comment: 1
  },
  {
    id: "EDU-2826-8512",
    customer: "신한은행",
    title: "DX 리더 과정",
    date: "5/11 - 13",
    instructor: "윤민재",
    hours: "9h",
    status: "진행중",
    type: "progress",
    grade: "S",
    comment: 5
  },
  {
    id: "EDU-2826-8533",
    customer: "삼성SDS",
    title: "ACE 오퍼레이션 운영",
    date: "5/14 - 15",
    instructor: "김도연",
    hours: "8h",
    status: "확정",
    type: "confirmed",
    grade: "A",
    comment: 0
  },
  {
    id: "EDU-2826-8521",
    customer: "현대오토에버",
    title: "DDD 설계 워크숍",
    date: "5/14 - 15",
    instructor: "최우진",
    hours: "8h",
    status: "확정",
    type: "confirmed",
    grade: "S",
    comment: 2
  },
  {
    id: "EDU-2826-8548",
    customer: "포스코ICT",
    title: "팀장 리더십 코칭",
    date: "5/14",
    instructor: "윤민재 대면",
    hours: "3h",
    status: "제안중",
    type: "proposal",
    grade: "S",
    comment: 4
  },
  {
    id: "REG-2826-0118",
    customer: "포스코ICT",
    title: "임원 코칭 예정",
    date: "5/15",
    instructor: "이혜정",
    hours: "2h",
    status: "의뢰",
    type: "request",
    grade: "A",
    comment: 1
  },
  {
    id: "REG-2826-0124",
    customer: "한화시스템",
    title: "AI 기반 LLM 기초 역량",
    date: "5/22 - 23",
    instructor: "AI 추천",
    hours: "16h",
    status: "의뢰",
    type: "request",
    grade: "S",
    comment: 7
  }
];

const alerts = [
  {
    icon: "✦",
    level: "info",
    title: "메시스템 구축 의뢰 자동 등록",
    body: "운영소통 대기",
    time: "10분 전"
  },
  {
    icon: "△",
    level: "danger",
    title: "이서영 5/16 일정 충돌",
    body: "RAG + AI Day / Tech",
    time: "30분 전"
  },
  {
    icon: "△",
    level: "warning",
    title: "DDD 워크숍 교재 미제출",
    body: "시차로 미제출",
    time: "1시간 전"
  },
  {
    icon: "●",
    level: "info",
    title: "신한은행 DX 후기 4.9 도착",
    body: "만족도 설문",
    time: "2시간 전"
  },
  {
    icon: "△",
    level: "warning",
    title: "정산 요청 12건 5일 마감",
    body: "₩48.2M",
    time: "오늘 오전"
  }
];

let currentFilter = "all";

function getStatusClass(type) {
  if (type === "progress") {
    return "status-progress";
  }

  if (type === "confirmed") {
    return "status-confirmed";
  }

  if (type === "proposal") {
    return "status-proposal";
  }

  return "status-request";
}

function renderProjects() {
  const tableBody = document.getElementById("projectTableBody");

  const filteredProjects =
    currentFilter === "all"
      ? projects
      : projects.filter((project) => project.type === currentFilter);

  tableBody.innerHTML = filteredProjects
    .map((project) => {
      return `
        <tr>
          <td>${project.id}</td>
          <td>${project.customer}</td>
          <td><strong>${project.title}</strong></td>
          <td>${project.date}</td>
          <td>${project.instructor}</td>
          <td>${project.hours}</td>
          <td>
            <span class="status-badge ${getStatusClass(project.type)}">
              ● ${project.status}
            </span>
          </td>
          <td>
            <span class="grade">${project.grade}</span>
          </td>
          <td class="comment">▱ ${project.comment}</td>
        </tr>
      `;
    })
    .join("");
}

function renderAlerts() {
  const alertList = document.getElementById("alertList");

  alertList.innerHTML = alerts
    .map((alert) => {
      return `
        <div class="alert-item">
          <div class="alert-title alert-${alert.level}">
            <span>${alert.icon}</span>
            <span>${alert.title}</span>
          </div>
          <p class="alert-body">${alert.body}</p>
          <div class="alert-time">${alert.time}</div>
        </div>
      `;
    })
    .join("");
}

function bindTabs() {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        item.classList.remove("active");
      });

      tab.classList.add("active");
      currentFilter = tab.dataset.filter;
      renderProjects();
    });
  });
}

function bindLoadMore() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  loadMoreBtn.addEventListener("click", () => {
    alert("목업 화면입니다. 실제 구현에서는 API를 통해 추가 데이터를 조회합니다.");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderAlerts();
  bindTabs();
  bindLoadMore();
});