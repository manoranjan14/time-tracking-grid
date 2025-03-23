<template>
  <main class="main-content">
    <div class="timesheet-header">
      <div class="timesheet-title">
          <div class="avatar">
        <img src="@/assets/DSC_0802.png" alt="User avatar" />
      </div>
        <span>Manoranjan</span>
      </div>
      <div class="timesheet-actions">
        <div class="days-dropdown">
          <span>Days</span>
          <i class="lucide-chevron-down"></i>
        </div>
        <button class="log-time-button" @click="openLogTimeModal">Log time</button>
        
      </div>
    </div>

    <div class="timesheet-navigation">
      <div class="date-range">
        <i class="lucide-calendar"></i>
        <span>01/Jun/24 - 30/Jun/24</span>
      </div>
      <button class="nav-button">
        <i class="lucide-chevron-right"></i>
      </button>
      <div class="group-by">
        <span>Group by</span>
        <div class="select-container">
          <select>
            <option>Issues</option>
          </select>
          <i class="lucide-chevron-down"></i>
        </div>
      </div>
    </div>


    <div class="timesheet-grid">
      <table>
        <thead>
          <tr class="header-row">
            <th class="issue-column">Issue</th>
            <th class="logged-column">Logged</th>
            <template v-for="(day, index) in days" :key="index">
              <th class="day-column" :class="{ 'weekend': day.isWeekend, 'today': day.isToday }">
                <div class="day-name">{{ day.dayName }}</div>
                <div class="day-number">{{ day.dayNumber }}</div>
              </th>
            </template>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(issue, issueIndex) in issues" :key="issueIndex">
            <td class="issue-cell">
              <div class="issue-icon">
                <i class="lucide-check-square"></i>
              </div>
              <div class="issue-details">
                <div class="issue-id">{{ issue.id }}</div>
                <div class="issue-summary">{{ issue.summary }}</div>
              </div>
            </td>
            <td class="logged-cell">{{ issue.totalLogged }}</td>
            <template v-for="(day, dayIndex) in days" :key="`${issueIndex}-${dayIndex}`">
              <td 
                class="time-cell" 
                :class="{ 
                  'has-time': issue.timeEntries[dayIndex], 
                  'weekend': day.isWeekend,
                  'today': day.isToday,
                  'highlighted': highlightedCell.issueIndex === issueIndex && highlightedCell.dayIndex === dayIndex
                }"
                @mouseover="highlightCell(issueIndex, dayIndex)"
                @mouseleave="clearHighlight"
                @click="openLogTimeForCell(issue, day)"
              >
                {{ issue.timeEntries[dayIndex] || '' }}
              </td>
            </template>
          </tr>
          <tr class="total-row">
            <td>Total</td>
            <td>{{ totalHours }}</td>
            <template v-for="(day, dayIndex) in days" :key="`total-${dayIndex}`">
              <td 
                class="total-cell" 
                :class="{ 'weekend': day.isWeekend, 'today': day.isToday }"
              >
                {{ getDayTotal(dayIndex) }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>

    
    <LogTimeModal
:isVisible="showLogTimeModal"
@close="showLogTimeModal = false"
:selectedDate="selectedDate"
@open-date-picker="openDatePickerModal"
/>

<DatePickerModal 
:isVisible="showDatePicker"
@close="showDatePicker = false"
@date-selected="handleDateSelected"
/>

  </main>
</template>

<script>
import { ref, computed } from 'vue';
import LogTimeModal from './LogModal.vue';
import DatePickerModal from './DatePickerModal.vue'; 


export default {
  name: 'MainContent',
  components: {
      LogTimeModal,
      DatePickerModal
  },
  setup() {
    const days = ref([
      { dayName: 'WED', dayNumber: 1, isWeekend: false, isToday: false },
      { dayName: 'THU', dayNumber: 2, isWeekend: false, isToday: false },
      { dayName: 'FRI', dayNumber: 3, isWeekend: false, isToday: false },
      { dayName: 'SAT', dayNumber: 4, isWeekend: true, isToday: false },
      { dayName: 'SUN', dayNumber: 5, isWeekend: true, isToday: false },
      { dayName: 'MON', dayNumber: 6, isWeekend: false, isToday: false },
      { dayName: 'TUE', dayNumber: 7, isWeekend: false, isToday: false },
      { dayName: 'WED', dayNumber: 8, isWeekend: false, isToday: false },
      { dayName: 'THU', dayNumber: 9, isWeekend: false, isToday: false },
      { dayName: 'FRI', dayNumber: 10, isWeekend: false, isToday: false },
      { dayName: 'SAT', dayNumber: 11, isWeekend: true, isToday: false },
      { dayName: 'SUN', dayNumber: 12, isWeekend: true, isToday: false },
      { dayName: 'MON', dayNumber: 13, isWeekend: false, isToday: false },
      { dayName: 'TUE', dayNumber: 14, isWeekend: false, isToday: false },
      { dayName: 'WED', dayNumber: 15, isWeekend: false, isToday: true },
      { dayName: 'THU', dayNumber: 16, isWeekend: false, isToday: false },
      { dayName: 'FRI', dayNumber: 17, isWeekend: false, isToday: false },
      { dayName: 'SAT', dayNumber: 18, isWeekend: true, isToday: false },
      { dayName: 'SUN', dayNumber: 19, isWeekend: true, isToday: false },
      { dayName: 'MON', dayNumber: 20, isWeekend: false, isToday: false },
      { dayName: 'TUE', dayNumber: 21, isWeekend: false, isToday: false },
      { dayName: 'WED', dayNumber: 22, isWeekend: false, isToday: false },
    ]);

    const issues = ref([
      {
        id: 'ATL-0011',
        summary: 'Issue summary',
        totalLogged: '4.5',
        timeEntries: {
          0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
        }
        
      },
      {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 9: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    {
      id: 'ATL-0011',
      summary: 'Issue summary',
      totalLogged: '4.5',
      timeEntries: {
        0: '4.5', 1: '4.5', 6: '4.5', 8: '4.5', 14: '4.5', 16: '4.5'
      }
    },
    ]);

    const openDatePickerModal = () => {
    showDatePicker.value = true;
  };

    const totalHours = computed(() => {
      let total = 0;
      issues.value.forEach(issue => {
        total += parseFloat(issue.totalLogged) || 0;
      });
      return total.toFixed(2);
    });

    const getDayTotal = (dayIndex) => {
      let total = 0;
      issues.value.forEach(issue => {
        if (issue.timeEntries[dayIndex]) {
          total += parseFloat(issue.timeEntries[dayIndex]) || 0;
        }
      });
      return total > 0 ? total.toFixed(1) : '';
    };

    const highlightedCell = ref({ issueIndex: -1, dayIndex: -1 });

    const highlightCell = (issueIndex, dayIndex) => {
      highlightedCell.value = { issueIndex, dayIndex };
    };

    const clearHighlight = () => {
      highlightedCell.value = { issueIndex: -1, dayIndex: -1 };
    };

    const showLogTimeModal = ref(false);
    const selectedDate = ref(new Date());

    const openLogTimeModal = () => {
      showLogTimeModal.value = true;
    };

    const openLogTimeForCell = (issue, day) => {
      selectedDate.value = new Date(2024, 5, day.dayNumber); 
      showLogTimeModal.value = true;
    };

    const handleLogTime = (logData) => {
      console.log('Log Data:', logData);
      showLogTimeModal.value = false;
    };

    const showDatePicker = ref(false);
  
  const handleDateSelected = (date) => {
    selectedDate.value = new Date(date);
    showDatePicker.value = false;
  };
  

    return {
      days,
      issues,
      totalHours,
      getDayTotal,
      highlightedCell,
      highlightCell,
      clearHighlight,
      openLogTimeForCell,
      showLogTimeModal,
      selectedDate,
      openLogTimeModal,
      handleLogTime,
      showDatePicker,
      handleDateSelected,
      openDatePickerModal
    };
  },
};
</script>

<style scoped>
.main-content {
grid-area: main;
padding: 20px;
overflow: auto;
}

.timesheet-header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
}

.timesheet-title {
display: flex;
align-items: center;
gap: 12px;
font-size: 18px;
font-weight: 500;
}

.timesheet-actions {
display: flex;
align-items: center;
gap: 12px;
}

.days-dropdown {
display: flex;
align-items: center;
gap: 4px;
padding: 6px 12px;
border: 1px solid var(--border-color);
border-radius: 3px;
cursor: pointer;
}

.log-time-button {
background-color: var(--primary-color);
color: white;
border: none;
border-radius: 3px;
padding: 8px 16px;
font-weight: 500;
cursor: pointer;
}

.log-time-button:hover {
background-color: var(--primary-hover);
}

.timesheet-navigation {
display: flex;
align-items: center;
margin-bottom: 20px;
gap: 12px;
}

.nav-button {
background: transparent;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width: 32px;
height: 32px;
border-radius: 50%;
}

.date-range {
display: flex;
align-items: center;
gap: 8px;
padding: 6px 12px;
border: 1px solid var(--border-color);
border-radius: 3px;
cursor: pointer;
}

.group-by {
display: flex;
align-items: center;
gap: 8px;
margin-left: auto;
}

.select-container {
position: relative;
width: 120px;
}

.select-container select {
width: 100%;
padding: 6px 12px;
border: 1px solid var(--border-color);
border-radius: 3px;
appearance: none;
background-color: white;
}

.select-container i {
position: absolute;
right: 10px;
top: 50%;
transform: translateY(-50%);
pointer-events: none;
}

.timesheet-grid {
overflow-x: auto;
overflow-y: auto;
}

table {
border-collapse: collapse;
width: 100%;
min-width: 1200px;
}

th, td {
border: 1px solid var(--border-color);
padding: 8px;
text-align: center;
}

.header-row th {
position: sticky;
top: 0;
background-color: white;
z-index: 1;
}

.issue-column {
width: 250px;
text-align: left;
}

.logged-column {
width: 80px;
}

.day-column {
min-width: 40px;
}

.day-name {
font-size: 12px;
color: var(--text-secondary);
}

.day-number {
font-weight: 500;
}

.weekend {
background-color: var(--weekend-color);
}

.today {
background-color: var(--today-color);
}

.issue-cell {
display: flex;
align-items: center;
gap: 8px;
text-align: left;
}

.issue-icon {
color: var(--primary-color);
}

.issue-details {
display: flex;
flex-direction: column;
}

.issue-id {
font-size: 12px;
color: var(--text-secondary);
}

.time-cell {
cursor: pointer;
}

.time-cell.has-time {
background-color: var(--secondary-color);
}

.timesheet-grid table tbody tr:hover {
background-color: #f0f0f0;
transition: background-color 0.3s ease; 
}


.total-row {
font-weight: 500;
}


.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.timesheet-grid {
overflow-x: auto;
overflow-y: auto;
-webkit-overflow-scrolling: touch; 
}

@media (max-width: 1024px) {
.timesheet-grid table {
  min-width: 900px;
}

.issue-column {
  width: 200px;
}
}

@media (max-width: 768px) {
.timesheet-navigation {
  flex-wrap: wrap;
  gap: 8px;
}

.date-range, .group-by {
  flex-grow: 1;
}

.issue-summary {
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
}

@media (max-width: 480px) {
.timesheet-header {
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.timesheet-actions {
  width: 100%;
}

.day-name {
  font-size: 10px;
}

.day-number {
  font-size: 12px;
}

.issue-cell {
  gap: 4px;
}

.issue-icon {
  display: none;
}
}
</style>