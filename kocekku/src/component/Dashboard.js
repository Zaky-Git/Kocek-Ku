import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import { AiFillFilter } from "react-icons/ai";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    function generateRandomString(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return result;
    }

    this.state = {
      history: [
        {
          type: "transfer", //choose transfer or topup or pay
          account: "kocekku", //if transfer (kocekku) if topup ("Dana", "Gopay", "Shopeepay", "OVO", "Telkomsel", "Tri") if pay (shopee,lazada,tokopedia,bukalapak,blibli)
          name: "Udin", //fill this with "" if type is pay and fill this with random name indonesia if transfer or topup
          noHandphone: "089678202131", //fill this with "" if type is transfer and pay, and fill this with random phone number if topup
          paymentNumber: "", //fill this with "" if type is transfer and fill this with random payment number if type is pay (can use function)
          date: "21 Apr 2023, 07:05", //random descendant
          amount: 10000, //random
          status: "Expense", //Expense or income, if transfer (can expense or income) if pay or topup always expense
          transactionNo: generateRandomString(10), //keep it like this
          referenceNo: generateRandomString(8), //keep it like this
        },
        {
          type: "transfer",
          account: "kocekku",
          name: "Asep",
          noHandphone: "081234567890",
          paymentNumber: "",
          date: "22 Apr 2023, 09:12",
          amount: 50000,
          status: "Income",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "topup",
          account: "Gopay",
          name: "Japran",
          noHandphone: "082345678901",
          paymentNumber: generateRandomString(12),
          date: "22 Apr 2023, 10:23",
          amount: 250000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "transfer",
          account: "kocekku",
          name: "Budi",
          noHandphone: "087654321098",
          paymentNumber: "",
          date: "22 Apr 2023, 12:56",
          amount: 75000,
          status: "Income",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "pay",
          account: "tokopedia",
          name: "",
          noHandphone: "",
          paymentNumber: generateRandomString(12),
          date: "22 Apr 2023, 15:17",
          amount: 150000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "topup",
          account: "Dana",
          name: "Ijad",
          noHandphone: "089876543210",
          paymentNumber: generateRandomString(12),
          date: "22 Apr 2023, 17:08",
          amount: 100000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "transfer",
          account: "kocekku",
          name: "Cecep",
          noHandphone: "087654321087",
          paymentNumber: "",
          date: "23 Apr 2023, 08:34",
          amount: 120000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "transfer",
          account: "kocekku",
          name: "Deni",
          noHandphone: "082345678902",
          paymentNumber: "",
          date: "23 Apr 2023, 11:05",
          amount: 35000,
          status: "Income",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },

        {
          type: "pay",
          account: "blibli",
          name: "",
          noHandphone: "",
          paymentNumber: generateRandomString(12),
          date: "23 Apr 2023, 14:16",
          amount: 80000,
          status: "Expense",
          transactionNo: generateRandomString(10),
          referenceNo: generateRandomString(8),
        },
      ],
    };
  }

  render() {
    return (
      <div className="flex flex-col mx-auto gap-10 py-6 px-16">
        <div className="text-[#192252] font-medium text-lg mx-6">
          Money Insight
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-row gap-20 bg-white p-6 rounded-lg">
              <div className="flex flex-col gap-3">
                <div className="text-base text-[#848fac]">Total Income</div>
                <div className="text-2xl font-medium text-[#192252]">
                  {" "}
                  <span className="text-base text-[#192252]">Rp.</span> 126.000
                </div>
              </div>
              <div className="my-auto text-[#848fac]">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-row gap-20 bg-white p-6 rounded-lg">
              <div className="flex flex-col gap-3">
                <div className="text-base text-[#848fac]">Total Expense</div>
                <div className="text-2xl font-medium text-[#192252]">
                  {" "}
                  <span className="text-base text-[#192252]">Rp.</span> 226.000
                </div>
              </div>
              <div className="my-auto text-[#848fac]">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-row gap-20 bg-white p-6 rounded-lg">
              <div className="flex flex-col gap-3">
                <div className="text-base text-[#848fac]">Total Saved</div>
                <div className="text-2xl font-medium text-[#192252]">
                  {" "}
                  <span className="text-base text-[#192252]">Rp.</span> 126.000
                </div>
              </div>
              <div className="my-auto text-[#848fac]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mx-6 ">
          <div className="text-[#192252] font-medium text-lg">
            Recent Activity
          </div>
          <div className="border-spacing-16 group cursor-pointer hover:bg-[#6245D5] border-[#cbcdd6] border-2 p-2 px-4 rounded-xl">
            <div className="flex flex-row gap-2">
              <div className="my-auto text-xl group-hover:text-white">
                <AiFillFilter />
              </div>
              <div className="font-medium group-hover:text-white">Filter</div>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto h-[500px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="sticky top-0 bg-gray-50 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Account
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {this.state.history.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.type === "pay"
                      ? item.account.charAt(0).toUpperCase() +
                        item.account.slice(1)
                      : item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.status === "Expense" ? "-" : "+"}
                    {item.amount.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DashBoard;
