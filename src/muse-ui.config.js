import 'muse-ui/lib/styles/base.less'
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  BottomNav,
  Drawer,
  Divider,
  Dialog,
  Menu,
  Grid,
  Icon,
  List,
  Popover,
  SubHeader,
  Switch,
  Tabs,
  TextField
} from 'muse-ui'

const components = [AppBar, Avatar, Badge, Button, BottomNav, Drawer, Divider, Dialog, Menu, Grid, Icon, List, Popover, SubHeader, Switch, Tabs, TextField]

export default {
  install(Vue) {
    components.forEach(c => Vue.use(c))
  }
}
