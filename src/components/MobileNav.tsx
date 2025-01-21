import { Sheet, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from 'react-icons/ci'

const MobileNav: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries />
      </SheetTrigger>
    </Sheet>
  )
}

export default MobileNav;