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
  // Import Lucide icons
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
  /* header.css */
  .header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: var(--background-color);
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  
  .header-left, .header-right {
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 24px;
    margin-right: 20px;
  }
  
  .main-nav {
    display: flex;
    gap: 16px;
  }
  
  .nav-item {
    display: flex;
    align-items: center;
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
    gap: 4px;
  }
  
  .create-button {
    margin-left: 16px;
    background-color: var(--primary-color);
    color: white;
    border: none;
    border-radius: 3px;
    padding: 8px 16px;
    font-weight: 500;
    cursor: pointer;
  }
  
  .create-button:hover {
    background-color: var(--primary-hover);
  }
  
  .search-container {
    display: flex;
    align-items: center;
    background-color: var(--background-secondary);
    border-radius: 3px;
    padding: 6px 12px;
    margin-right: 16px;
    width: 240px;
  }
  
  .search-input {
    border: none;
    background: transparent;
    margin-left: 8px;
    width: 100%;
    outline: none;
  }
  
  .icon-button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0 4px;
  }
  
  .icon-button:hover {
    background-color: var(--background-secondary);
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
  
  .icon {
    width: 20px;
    height: 20px;
    color: var(--text-color);
  }
  </style>