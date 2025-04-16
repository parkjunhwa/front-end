import type { VerticalNavItems } from '@layouts/types'
import menu_main from './menu_main'
import menu_mr from './menu_mr'
import menu_wos from './menu_wos'
export default [...menu_main, ...menu_mr, ...menu_wos] as VerticalNavItems
