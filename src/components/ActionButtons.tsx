'use client'
import React, { useState, ChangeEvent } from "react";
import { Plus, ArrowUpDown, DollarSign, Clock, Wallet, Laptop } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const ActionButtons = () => {
  const [topUpAmount, setTopUpAmount] = useState("");
  const [topUpFrom, setTopUpFrom] = useState("");
  const [topUpMode, setTopUpMode] = useState("");
  const [topUpNotes, setTopUpNotes] = useState("");

  const [transferAmount, setTransferAmount] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [transferAccount, setTransferAccount] = useState("");
  const [transferNotes, setTransferNotes] = useState("");

  const [requestAmount, setRequestAmount] = useState("");
  const [requestFrom, setRequestFrom] = useState("");
  const [requestPurpose, setRequestPurpose] = useState("");
  const [requestNotes, setRequestNotes] = useState("");

  const [historyFrom, setHistoryFrom] = useState("");
  const [historyTo, setHistoryTo] = useState("");
  const [historyType, setHistoryType] = useState("");

  return (
    <div className="grid grid-cols-2 h-[280px]">
      {/* Top Up Button */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-gray-100 rounded-tl-2xl border-b border-r border-white p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <Plus className="w-6 h-6 sm:w-10 sm:h-10 text-black" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-black">Top Up</span>
      </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-black border-black">
          <DialogHeader className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image src="/images/recieve.png" alt="Top Up" width={100} height={100} />
              </div>
              <div>
                <DialogTitle className="text-white text-2xl font-bold">Enter the amount received</DialogTitle>
                <DialogDescription className="text-white text-base mt-2">
                  Add funds to your account using your preferred payment method.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="grid grid-cols-4 gap-4 py-6">
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Amount
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="amount"
                  value={topUpAmount}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTopUpAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                From
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="from"
                  value={topUpFrom}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTopUpFrom(e.target.value)}
                  placeholder="Source"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Mode
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="mode"
                  value={topUpMode}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTopUpMode(e.target.value)}
                  placeholder="Payment mode"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Notes
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="notes"
                  value={topUpNotes}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTopUpNotes(e.target.value)}
                  placeholder="Add notes"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <DialogFooter className="bg-black border-t border-gray-800">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2  mt-2">
              Top Up Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Transfer Button */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-gray-100 rounded-tr-2xl p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <ArrowUpDown className="w-6 h-6 sm:w-10 sm:h-10 text-black" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-black">Transfer</span>
      </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-black border-black">
          <DialogHeader className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image src='/images/transfer.png' alt="Transfer" width={100} height={100} />
              </div>
              <div>
                <DialogTitle className="text-white text-2xl font-bold">Enter the transferred amount</DialogTitle>
                <DialogDescription className="text-white text-base mt-2">
                  Move funds between internal accounts or send to a linked recipient.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="grid grid-cols-4 gap-4 py-6">
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Amount
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="transfer-amount"
                  value={transferAmount}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTransferAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Transfer To
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="transfer-to"
                  value={transferTo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTransferTo(e.target.value)}
                  placeholder="Recipient"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Mode
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="transfer-mode"
                  value={transferAccount}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTransferAccount(e.target.value)}
                  placeholder="Transfer mode"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Notes
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="transfer-notes"
                  value={transferNotes}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setTransferNotes(e.target.value)}
                  placeholder="Add notes"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <DialogFooter className="bg-black border-t border-gray-800">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2  mt-2">
              Transfer Funds
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Request Button */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-gray-100 rounded-bl-2xl p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3">
              <DollarSign className="w-6 h-6 sm:w-10 sm:h-10 text-black" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-black">Request</span>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px] bg-black border-black">
          <DialogHeader className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image src='/images/request.png' alt="Request" width={100} height={100} />
              </div>
              <div>
                <DialogTitle className="text-white text-2xl font-bold">Request</DialogTitle>
                <DialogDescription className="text-white text-base mt-2">
                  Request funds from another user or department with a clear purpose.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="grid grid-cols-4 gap-4 py-6">
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Amount
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="request-amount"
                  value={requestAmount}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setRequestAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                From
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="request-from"
                  value={requestFrom}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setRequestFrom(e.target.value)}
                  placeholder="Request from"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Purpose
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="request-purpose"
                  value={requestPurpose}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setRequestPurpose(e.target.value)}
                  placeholder="Purpose"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white text-black font-bold text-center py-3 px-4 rounded-md">
                Notes
              </div>
              <div className="bg-green-800 h-12 rounded-md flex items-center px-4">
                <Input
                  id="request-notes"
                  value={requestNotes}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setRequestNotes(e.target.value)}
                  placeholder="Add notes"
                  className="bg-transparent border-none text-white placeholder:text-gray-400 focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <DialogFooter className="bg-black border-t border-gray-800">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 mt-2">
              Send Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* History Button */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-gray-100 rounded-br-2xl border-t border-l border-white p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 sm:mb-3">
          <Clock className="w-6 h-6 sm:w-10 sm:h-10 text-black" />
        </div>
        <span className="text-xs sm:text-sm font-medium text-black">History</span>
      </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Transaction History</DialogTitle>
            <DialogDescription>
              Filter and view your transaction history.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="history-from" className="text-right text-sm font-medium">
                From Date
              </label>
              <Input
                id="history-from"
                type="date"
                value={historyFrom}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setHistoryFrom(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="history-to" className="text-right text-sm font-medium">
                To Date
              </label>
              <Input
                id="history-to"
                type="date"
                value={historyTo}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setHistoryTo(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="history-type" className="text-right text-sm font-medium">
                Type
              </label>
              <Input
                id="history-type"
                value={historyType}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setHistoryType(e.target.value)}
                placeholder="All, Transfer, Payment, etc."
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">View History</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActionButtons;
