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

const calendarDays = [
  { day: "4/27", muted: true, events: [] },
  { day: "28", muted: true, events: [] },
  { day: "29", muted: true, events: [] },
  { day: "30", muted: true, events: [] },
  { day: "5/1", events: [] },
  { day: "2", muted: true, events: [] },
  { day: "3", sunday: true, events: [] },

  {
    day: "4",
    events: [
      { title: "ACE Associate 양성", owner: "김도연", color: "blue" },
      { title: "AWS Day 기초", owner: "이서영", color: "cyan" },
      { title: "주간 운영회의", owner: "나현우", color: "gray" }
    ]
  },
  {
    day: "5",
    events: [
      { title: "ACE Associate 양성", owner: "김도연", color: "blue" },
      { title: "AWS Day 기초", owner: "이서영", color: "cyan" },
      { title: "맨신스택 DX 워크숍", owner: "이서영", color: "purple" }
    ]
  },
  {
    day: "6",
    events: [
      { title: "ACE Associate 양성", owner: "김도연", color: "blue" },
      { title: "K8s 운영 실무", owner: "조현수", color: "cyan" },
      { title: "데이터 분석 입문", owner: "정하늘", color: "yellow" }
    ]
  },
  {
    day: "7",
    events: [
      { title: "ACE Associate 양성", owner: "김도연", color: "blue" },
      { title: "K8s 운영 실무", owner: "조현수", color: "cyan" },
      { title: "API AI Day / Tech", owner: "이서영", color: "gray" }
    ]
  },
  {
    day: "8",
    events: [
      { title: "LLM Application", owner: "이서영", color: "pink" },
      { title: "Spring Boot 실전", owner: "최우진", color: "green" },
      { title: "AI BI Day / Tech", owner: "이서영", color: "gray" }
    ]
  },
  { day: "9", muted: true, events: [] },
  { day: "10", sunday: true, events: [] },

  {
    day: "11",
    events: [
      { title: "신한은행 DX 리더 과정", owner: "윤민재", color: "purple" },
      { title: "K8s 운영 실무", owner: "조현수", color: "cyan" },
      { title: "RAG 파이프라인 부트캠프", owner: "이서영", color: "pink" },
      { title: "금융 데이터 사이언스", owner: "정하늘", color: "yellow" }
    ]
  },
  {
    day: "12",
    active: true,
    events: [
      { title: "신한은행 DX 리더 과정", owner: "윤민재", color: "purple" },
      { title: "K8s 운영 실무", owner: "조현수", color: "cyan" },
      { title: "RAG 파이프라인 부트캠프", owner: "이서영", color: "pink" },
      { title: "금융 데이터 사이언스", owner: "정하늘", color: "yellow" }
    ]
  },
  {
    day: "13",
    events: [
      { title: "신한은행 DX 리더 과정", owner: "윤민재", color: "purple" },
      { title: "K8s 운영 실무", owner: "조현수", color: "cyan" },
      { title: "RAG 파이프라인 부트캠프", owner: "이서영", color: "pink" },
      { title: "금융 데이터 사이언스", owner: "정하늘", color: "yellow" }
    ]
  },
  {
    day: "14",
    events: [
      { title: "신한은행 DX 리더 과정", owner: "윤민재", color: "purple" },
      { title: "K8s 운영 실무", owner: "조현수", color: "cyan" },
      { title: "RAG 파이프라인 부트캠프", owner: "이서영", color: "pink" },
      { title: "DX 기초 강의회", owner: "최우진", color: "gray" }
    ]
  },
  {
    day: "15",
    events: [
      { title: "ACE 이사이트 운영", owner: "김도연", color: "blue" },
      { title: "RAG 강의 인증", owner: "최서연", color: "pink" },
      { title: "DDD 설계 워크숍", owner: "최우진", color: "green" },
      { title: "DB 운영 실무", owner: "이혜정", color: "yellow" }
    ]
  },
  {
    day: "16",
    sunday: true,
    events: [
      { title: "ACE 인사이트 운영", owner: "김도연", color: "blue" },
      { title: "RAG 튜토리얼", owner: "이서영", color: "pink" },
      { title: "DDD 설계 워크숍", owner: "최우진", color: "green" },
      { title: "웹 기본 LLM 튜닝", owner: "이혜정", color: "gray" }
    ]
  },
  {
    day: "17",
    sunday: true,
    events: [
      { title: "ACE 인사이트 운영", owner: "김도연", color: "blue" },
      { title: "RAG 튜토리얼", owner: "이서영", color: "pink" },
      { title: "DDD 설계 워크숍", owner: "최우진", color: "green" },
      { title: "BA 스터디", owner: "김도연", color: "gray" }
    ]
  },

  {
    day: "18",
    events: [
      { title: "ACE Pro 양성 5주", owner: "김도연", color: "blue" },
      { title: "Azure 마이그레이션", owner: "정하늘", color: "cyan" },
      { title: "LangChain 실습", owner: "나현우", color: "gray" }
    ]
  },
  {
    day: "19",
    events: [
      { title: "ACE Pro 양성", owner: "김도연", color: "blue" },
      { title: "Azure 마이그레이션", owner: "정하늘", color: "cyan" },
      { title: "SeopOnline 과정", owner: "조민수", color: "gray" },
      { title: "SQL 튜토리얼", owner: "정하늘", color: "yellow" }
    ]
  },
  {
    day: "20",
    deadline: "마감 3",
    events: [
      { title: "ACE Pro 양성", owner: "김도연", color: "blue" },
      { title: "Azure 마이그레이션", owner: "정하늘", color: "cyan" },
      { title: "SQL 튜토리얼", owner: "정하늘", color: "yellow" },
      { title: "정산 검토", owner: "이혜정", color: "gray" }
    ]
  },
  {
    day: "21",
    events: [
      { title: "ACE Pro 양성", owner: "김도연", color: "blue" },
      { title: "프로젝트 회의 주니어", owner: "이혜정", color: "purple" },
      { title: "SQL 튜토리얼", owner: "정하늘", color: "yellow" }
    ]
  },
  {
    day: "22",
    events: [
      { title: "ACE Pro 양성", owner: "김도연", color: "blue" },
      { title: "프로젝트 회의 주니어", owner: "이혜정", color: "purple" },
      { title: "인프라 운영 실무", owner: "최우진", color: "gray" }
    ]
  },
  {
    day: "23",
    events: [
      { title: "인프라 운영 실무", owner: "최우진", color: "purple" },
      { title: "DevOps 기초", owner: "이혜정", color: "cyan" }
    ]
  },
  {
    day: "24",
    sunday: true,
    events: [
      { title: "인프라 운영 실무", owner: "최우진", color: "purple" },
      { title: "DevOps 기초", owner: "이혜정", color: "cyan" }
    ]
  },

  {
    day: "25",
    deadline: "마감 3",
    events: [
      { title: "AI 스프린트 DX 정기과정", owner: "이서영", color: "purple" },
      { title: "ML Ops 부트캠프", owner: "정하늘", color: "gray" }
    ]
  },
  {
    day: "26",
    deadline: "마감 3",
    events: [
      { title: "AI 스프린트 DX 정기과정", owner: "이서영", color: "purple" },
      { title: "MLOps 부트캠프", owner: "정하늘", color: "gray" },
      { title: "GCP 데이터 엔지니어링", owner: "조현수", color: "cyan" }
    ]
  },
  {
    day: "27",
    deadline: "마감 1",
    events: [
      { title: "AI 스프린트 DX 정기과정", owner: "이서영", color: "purple" },
      { title: "GCP 데이터 엔지니어링", owner: "조현수", color: "cyan" }
    ]
  },
  {
    day: "28",
    deadline: "마감 1",
    events: [
      { title: "TOD 실습", owner: "최우진", color: "green" },
      { title: "MLOps 특강, 실습", owner: "나현우", color: "gray" }
    ]
  },
  {
    day: "29",
    deadline: "마감 1",
    events: [
      { title: "TOD 실습", owner: "최우진", color: "green" },
      { title: "Tableau 튜토리얼", owner: "정하늘", color: "yellow" }
    ]
  },
  {
    day: "30",
    events: [
      { title: "주간 회고", owner: "전체", color: "gray" }
    ]
  },
  {
    day: "31",
    sunday: true,
    events: [
      { title: "주간 회고", owner: "전체", color: "gray" }
    ]
  },

  {
    day: "6/1",
    muted: true,
    events: [
      { title: "Agentic AI 워크숍", owner: "이서영", color: "pink" },
      { title: "K8s 보안", owner: "조현수", color: "cyan" }
    ]
  },
  {
    day: "2",
    muted: true,
    events: [
      { title: "Agentic AI 워크숍", owner: "이서영", color: "pink" }
    ]
  },
  { day: "3", muted: true, events: [] },
  {
    day: "4",
    muted: true,
    events: [
      { title: "ACE 5월 수강생 만족도 조사", owner: "전체", color: "gray" }
    ]
  },
  { day: "5", muted: true, events: [] },
  { day: "6", muted: true, events: [] },
  { day: "7", muted: true, sunday: true, events: [] }
];

let currentFilter = "all";

function getStatusClass(type) {
  if (type === "progress") return "status-progress";
  if (type === "confirmed") return "status-confirmed";
  if (type === "proposal") return "status-proposal";
  return "status-request";
}

function renderProjects() {
  const tableBody = document.getElementById("projectTableBody");

  if (!tableBody) return;

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

  if (!alertList) return;

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

function renderCalendar() {
  const calendarGrid = document.getElementById("calendarGrid");

  if (!calendarGrid) return;

  calendarGrid.innerHTML = calendarDays
    .map((day) => {
      const dayClasses = [
        "day-cell",
        day.muted ? "muted" : "",
        day.active ? "selected-day" : ""
      ]
        .filter(Boolean)
        .join(" ");

      const numberClass = day.sunday
        ? "sunday-number"
        : day.muted
          ? "muted-number"
          : "";

      const events = day.events
        .map((event) => {
          return `
            <div class="event event-${event.color}">
              <span class="event-title">${event.title}</span>
              <span class="event-owner">${event.owner}</span>
            </div>
          `;
        })
        .join("");

      return `
        <div class="${dayClasses}">
          <div class="day-number">
            <span class="${numberClass}">${day.day}</span>
            ${day.deadline ? `<span class="deadline">${day.deadline}</span>` : ""}
          </div>
          <div class="event-list">
            ${events}
          </div>
        </div>
      `;
    })
    .join("");
}

function bindNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const dashboardPage = document.getElementById("dashboardPage");
  const schedulePage = document.getElementById("schedulePage");
  const emptyPage = document.getElementById("emptyPage");
  const emptyTitle = document.getElementById("emptyTitle");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      const page = item.dataset.page;

      dashboardPage.classList.remove("active");
      schedulePage.classList.remove("active");
      emptyPage.classList.remove("active");

      if (page === "dashboard") {
        dashboardPage.classList.add("active");
        return;
      }

      if (page === "schedule") {
        schedulePage.classList.add("active");
        return;
      }

      const label = item.querySelector("span:last-child").textContent;
      emptyTitle.textContent = `${label} 화면`;
      emptyPage.classList.add("active");
    });
  });
}

function bindLoadMore() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  if (!loadMoreBtn) return;

  loadMoreBtn.addEventListener("click", () => {
    alert("목업 화면입니다. 실제 구현에서는 API를 통해 추가 데이터를 조회합니다.");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderAlerts();
  renderCalendar();
  bindTabs();
  bindNavigation();
  bindLoadMore();
});