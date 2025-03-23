import { createApp } from 'vue'
import App from './App.vue'



import { 
  Grid, 
  ChevronDown, 
  Search, 
  Bell, 
  HelpCircle, 
  Settings, 
  CheckCircle, 
  Users, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MoreHorizontal,
  CheckSquare,
  FileText,
  Clock
} from 'lucide-vue-next'

const app = createApp(App)


app.component('LucideGrid', Grid)
app.component('LucideChevronDown', ChevronDown)
app.component('LucideSearch', Search)
app.component('LucideBell', Bell)
app.component('LucideHelpCircle', HelpCircle)
app.component('LucideSettings', Settings)
app.component('LucideCheckCircle', CheckCircle)
app.component('LucideUsers', Users)
app.component('LucideChevronLeft', ChevronLeft)
app.component('LucideChevronRight', ChevronRight)
app.component('LucideCalendar', Calendar)
app.component('LucideMoreHorizontal', MoreHorizontal)
app.component('LucideCheckSquare', CheckSquare)
app.component('LucideFileText', FileText)
app.component('LucideClock', Clock)

app.mount('#app')