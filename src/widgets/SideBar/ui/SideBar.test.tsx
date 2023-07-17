import { fireEvent, getByTestId, render,screen } from "@testing-library/react"
import { SideBar } from "./SideBar"
import { componentRender } from "shared/lib/tests/componentRender/componentRender"



describe('Sidebar', () => {
    test('Render Sidebar', () => {
        componentRender(<SideBar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    
    test('Test toggle SideBar', () => {
        componentRender(<SideBar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})

