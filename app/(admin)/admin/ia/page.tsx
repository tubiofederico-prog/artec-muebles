"use client";

import Link from "next/link";
import { MessageSquare, Send, X, Clock, CheckCircle } from "lucide-react";
import { MOCK_AI_CONVERSATIONS } from "@/data/mockData";
import { useState } from "react";

export default function AIPage() {
  const [selectedConversation, setSelectedConversation] = useState(
    MOCK_AI_CONVERSATIONS[0]
  );

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: "bg-blue-100 text-blue-700",
      in_progress: "bg-purple-100 text-purple-700",
      ai_responded: "bg-violet-100 text-violet-700",
      escalated_to_human: "bg-orange-100 text-orange-700",
      closed: "bg-green-100 text-green-700",
    };
    return colors[status] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Agente IA</h1>
        <p className="text-gray-600 mt-2">
          Bandeja de entrada y gestión de conversaciones
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* Conversation List */}
        <div className="lg:col-span-1 bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-bold text-gray-900">Conversaciones</h2>
            <p className="text-xs text-gray-600 mt-1">
              {MOCK_AI_CONVERSATIONS.length} activas
            </p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {MOCK_AI_CONVERSATIONS.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full text-left p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  selectedConversation.id === conv.id ? "bg-violet-50" : ""
                }`}
              >
                <p className="font-semibold text-gray-900 text-sm">
                  {conv.customerName}
                </p>
                <p className="text-xs text-gray-600 mt-1 truncate">
                  {conv.messages[conv.messages.length - 1]?.content}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${getStatusColor(conv.status)}`}
                  >
                    {conv.status.replace(/_/g, " ")}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                {selectedConversation.customerName}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Canal:{" "}
                <span className="font-semibold">
                  {selectedConversation.channel.replace(/_/g, " ")}
                </span>
              </p>
            </div>
            <span
              className={`text-sm font-bold px-3 py-1 rounded ${getStatusColor(selectedConversation.status)}`}
            >
              {selectedConversation.status.replace(/_/g, " ")}
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {selectedConversation.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.from === "customer" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                    msg.from === "customer"
                      ? "bg-gray-100 text-gray-900"
                      : msg.from === "ai"
                      ? "bg-violet-100 text-violet-900"
                      : "bg-blue-100 text-blue-900"
                  }`}
                >
                  {msg.from !== "customer" && (
                    <p className="text-xs font-bold mb-1">
                      {msg.from === "ai" ? "Agente IA" : "Soporte"}
                    </p>
                  )}
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe tu respuesta..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
              />
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-bold text-gray-900 mb-4">Acciones rápidas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Cerrar conversación", color: "gray" },
            { label: "Escalar a humano", color: "orange" },
            { label: "Enviar catálogo", color: "violet" },
            { label: "Registrar nota", color: "blue" },
          ].map((action, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                {
                  gray: "bg-gray-100 text-gray-900 hover:bg-gray-200",
                  orange: "bg-orange-100 text-orange-700 hover:bg-orange-200",
                  violet: "bg-violet-100 text-violet-700 hover:bg-violet-200",
                  blue: "bg-blue-100 text-blue-700 hover:bg-blue-200",
                }[color]
              }`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
