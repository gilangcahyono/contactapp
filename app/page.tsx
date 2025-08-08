import { Contact } from "@/types/contact";
import { getToken } from "@/lib/utils";
import axios from "@/lib/axios";
import SearchInput from "@/components/SearchInput";
import ProductList from "@/components/ProductList";
import AddContactButton from "@/components/AddContactButton";
import Header from "@/components/Header";
import InvisibleButton from "@/components/icons/InvisibleButton";
import DropdownMenu from "@/components/DropdownMenu";

const Home = async () => {
  const token = await getToken();
  const res = await axios.get("/contacts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
          <DropdownMenu />
        </Header.Actions>
      </Header>
      <SearchInput />
      <ProductList contacts={contacts} />
      <AddContactButton />
    </div>
  );
};

export default Home;
