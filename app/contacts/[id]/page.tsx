import { getToken } from "@/lib/utils";
import { Contact } from "@/types/contact";
import Header from "@/components/Header";
import Link from "next/link";
import axios from "@/lib/axios";
import Dropdown from "@/components/Dropdown/index";
import Toggle from "@/components/Dropdown/Toggle";
import Menu from "@/components/Dropdown/Menu";
import Item from "@/components/Dropdown/Menu/Item";
import ElipsHorizontalIcon from "@/components/icons/ElipsHorizontalIcon";
import DeleteButton from "@/components/DeleteButton";
import { Metadata } from "next";
import Modal from "@/components/Modal";
import Title from "@/components/Modal/Title";
import Body from "@/components/Modal/Body";
import Action from "@/components/Modal/Action.tsx";
import ViewQrCode from "@/components/ViewQrCode";

export const metadata: Metadata = {
  title: "Detail contact",
};

type Props = {
  params: Promise<{ id: string }>;
};

const Page: React.FC<Props> = async ({ params }) => {
  const { id } = await params;
  const token = await getToken();
  const res = await axios.get(`/contacts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const contact: Contact = res.data.data;

  return (
    <div className="px-4">
      <Header>
        <Header.Back>
          <Link href="/" scroll={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
        </Header.Back>
        <Header.Actions>
          <Dropdown>
            <Toggle>
              <ElipsHorizontalIcon />
            </Toggle>
            <Menu>
              <Item href={`/contacts/${contact.id}/edit`}>
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <span>Edit</span>
              </Item>
              <Item>
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                <span>Delete</span>
              </Item>
            </Menu>
          </Dropdown>
        </Header.Actions>
      </Header>

      <div className="mb-5">
        <div className="w-20 h-20 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full bg-gray-400 rounded-full p-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <h2 className="text-center text-2xl w-full mt-5">{contact.name}</h2>
      </div>

      <div className="bg-white rounded-2xl px-3 py-3 mb-2 flex items-center justify-between">
        <div>
          <p>{contact.phone}</p>
          <span className="text-gray-500 text-sm">Mobile</span>
        </div>
        <a href={`https://wa.me/62${contact.phone.slice(1)}`} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        </a>
      </div>

      <p className="text-sm text-gray-500 ml-3 mb-2">More</p>

      <ViewQrCode />

      <Modal id="delete-contact-modal">
        <Title>Delete this contact?</Title>
        <Body>
          Are you sure you want to delete this contact? This action cannot be
          undone.
        </Body>
        <Action>
          <DeleteButton id={contact.id} />
        </Action>
      </Modal>
    </div>
  );
};

export default Page;
