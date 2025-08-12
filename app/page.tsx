import { Contact } from "@/types/contact";
import { getToken } from "@/lib/utils";
import axios from "@/lib/axios";
import SearchInput from "@/components/SearchInput";
import ProductList from "@/components/ProductList";
import AddContactButton from "@/components/AddContactButton";
import Header from "@/components/Header";
import InvisibleButton from "@/components/icons/InvisibleButton";
import Dropdown from "@/components/Dropdown";
import Toggle from "@/components/Dropdown/Toggle";
import Menu from "@/components/Dropdown/Menu";
import Item from "@/components/Dropdown/Menu/Item";
import ElipsHorizontalIcon from "@/components/icons/ElipsHorizontalIcon";
import LogoutButton from "@/components/LogoutButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Contacts",
};

type Props = {
  searchParams: Promise<{ search: string }>;
};

const Home: React.FC<Props> = async ({ searchParams }) => {
  const search = (await searchParams).search;
  const token = await getToken();
  const res = await axios.get("/contacts", {
    params: { search },
    headers: { Authorization: `Bearer ${token}` },
  });
  const contacts: Contact[] = res.data.data;

  return (
    <div className="px-4">
      <Header>
        <Header.Back>
          <InvisibleButton />
        </Header.Back>
        <Header.Title>Contacts</Header.Title>
        <Header.Actions>
          <Dropdown>
            <Toggle>
              <ElipsHorizontalIcon />
            </Toggle>
            <Menu>
              <Item href="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span>Profile</span>
              </Item>
              <Item>
                <LogoutButton />
              </Item>
            </Menu>
          </Dropdown>
        </Header.Actions>
      </Header>
      <SearchInput />
      <ProductList contacts={contacts} />
      <AddContactButton />
    </div>
  );
};

export default Home;
