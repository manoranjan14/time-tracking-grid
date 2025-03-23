<template>
    <header class="header">
      <div class="header-left">
        <button class="icon-button">
          <GridIcon class="icon" /> 
        </button>
        <img src="@/assets/logo12.png" alt="Jira" class="logo" />
        <nav class="main-nav">
          <a href="#" class="nav-item">Your work</a>
          <a href="#" class="nav-item">
            Projects
          </a>
          <a href="#" class="nav-item">
            Filters
          </a>
          <a href="#" class="nav-item">
            Dashboards
          </a>
          <a href="#" class="nav-item">People</a>
          <a href="#" class="nav-item">
            Apps
          </a>
        </nav>
        <button class="create-button">Create</button>
      </div>
      <div class="header-right">
        <div class="search-container">
          <SearchIcon class="icon" />
          <input type="text" placeholder="Search" class="search-input" />
        </div>
        <button class="icon-button">
          <BellIcon class="icon" />
        </button>
        <button class="icon-button">
          <HelpCircleIcon class="icon" />
        </button>
        <button class="icon-button">
          <SettingsIcon class="icon" />
        </button>
        <div class="avatar">
          <img src="@/assets/DSC_0802.png" alt="User avatar" />
        </div>
      </div>
    </header>
  </template>
  
  <script>
 
  import { GridIcon,  SearchIcon, BellIcon, HelpCircleIcon, SettingsIcon } from 'lucide-vue-next';
  
  export default {
    name: 'APPHeader',
    components: {
      GridIcon,
      SearchIcon,
      BellIcon,
      HelpCircleIcon,
      SettingsIcon,
    },
  };
  </script>
  
  <style scoped>
.header {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.header-left, .header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-button {
  background: transparent;
  border: none;
  border-radius: 3px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.icon-button:hover {
  background-color: var(--background-secondary);
}

.logo {
  height: 24px;
  margin-right: 8px;
}

.main-nav {
  display: flex;
  gap: 16px;
  margin-left: 8px;
}

.nav-item {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
}

.nav-item:hover {
  color: var(--text-color);
}

.create-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 6px 12px;
  font-weight: 500;
  margin-left: 8px;
  cursor: pointer;
  white-space: nowrap;
}

.create-button:hover {
  background-color: var(--primary-hover);
}

.search-container {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--background-secondary);
  border-radius: 3px;
  padding: 6px 12px;
  width: 240px;
}

.search-input {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  font-size: 14px;
}

.icon {
  width: 16px;
  height: 16px;
  color: var(--text-secondary);
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

/* Responsive styles */
@media (max-width: 1024px) {
  .main-nav {
    gap: 10px;
  }
  
  .nav-item {
    font-size: 13px;
  }
  
  .search-container {
    width: 180px;
  }
}

@media (max-width: 840px) {
  .nav-item:nth-child(n+4) {
    display: none;
  }
}

@media (max-width: 768px) {
  .header {
    height: 48px;
    padding: 0 12px;
  }

  .main-nav {
    display: none;
  }
  
  .create-button {
    display: none;
  }

  .search-container {
    width: 160px;
  }
  
  .logo {
    height: 20px;
  }
  
  .icon-button {
    width: 28px;
    height: 28px;
  }
  
  .avatar {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 600px) {
  .icon-button:nth-of-type(2),
  .icon-button:nth-of-type(3) {
    display: none;
  }
  
  .search-container {
    width: 140px;
  }
}

@media (max-width: 480px) {
  .header {
    height: 40px;
    padding: 0 8px;
  }
  
  .search-container {
    display: none;
  }
  
  .icon-button {
    width: 24px;
    height: 24px;
  }
  
  .icon {
    width: 14px;
    height: 14px;
  }
  
  .avatar {
    width: 24px;
    height: 24px;
  }
  
  /* Add a search button for mobile that can trigger a full-screen search */
  .search-button-mobile {
    display: flex;
  }
}
  </style>