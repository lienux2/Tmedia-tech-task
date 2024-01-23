import Image from "next/image";
import { Dashboard } from "../Icons/Dashboard/Dashboard";
import { Connectors } from "../Icons/Connectors/Connectors";
import { Devices } from "../Icons/Devices/Devices";
import Link from "next/link";
import { Settings } from "../Icons/Settings/Settings";
import { Profile } from "../Icons/Profile/Profile";
import { Chevron } from "../Icons/Chevron/Chevron";
import Logo from "../../../public/Logotype.svg";

export const Navbar = () => {
  
  return (
    <>
      <div className="bg-[#181e34] text-[#c5c7d3] py-5 px-40 border-b-2 border-solid border-[#e2e3e91a]">
        <nav>
          <div className="flex gap-10 justify-between">
            <div className="flex gap-10 items-center">
              <div>
                <Image src={Logo} width={66} height={40} alt="logo" />
              </div>
              <div className="flex gap-2 items-center">
                <Dashboard />
                <Link href="/dashboard">
                  <h3 className="text-sm">Dashboard</h3>
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <Connectors />
                <Link href="/connectors">
                  <h3 className="text-sm">Connectors</h3>
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <Devices />
                <Link href="/devices">
                  <h3 className="text-sm">Devices</h3>
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <Settings />
                <Link href="/settings">
                  <h3 className="text-sm">General Settings</h3>
                </Link>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex gap-2 items-center">
                <Profile />
                <h3 className="text-sm">Roberts</h3>
                <Chevron />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};