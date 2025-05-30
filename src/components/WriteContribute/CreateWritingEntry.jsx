// components/CreateWritingEntry.jsx
import React, { useState } from "react";
import { Book, FileText, Feather, ScrollText, PlusCircle, ChevronLeft,ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const writingTypes = [
    { type: "Blog", icon: <Feather className="w-6 h-6 text-purple-500" />, color: "purple" },
    { type: "Story", icon: <ScrollText className="w-6 h-6 text-pink-500" />, color: "pink" },
    { type: "Article", icon: <FileText className="w-6 h-6 text-blue-500" />, color: "blue" },
    { type: "Book", icon: <Book className="w-6 h-6 text-green-500" />, color: "green" },
];

export function CreateWritingEntry() {
    const [stage, setStage] = useState(0);
    const [selectedType, setSelectedType] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "# Welcome to your new "
    });

    // Helper function for title suggestions
function suggestTitles(type) {
  const suggestions = {
    Blog: ["daily-journal", "tech-thoughts", "life-lessons"],
    Story: ["midnight-tales", "urban-legends", "fantasy-dreams"],
    Article: ["ai-revolution", "quantum-explained", "future-tech"],
    Book: ["the-great-adventure", "silent-whispers", "code-and-life"]
  };
  return suggestions[type][Math.floor(Math.random() * suggestions[type].length)];
}
    const getTypeColor = (color) => {
        const colors = {
            purple: "from-purple-500 to-purple-600",
            pink: "from-pink-500 to-pink-600",
            blue: "from-blue-500 to-blue-600",
            green: "from-green-500 to-green-600"
        };
        return colors[color] || "from-gray-500 to-gray-600";
    };

    return (
        <div className="mt-6 dark:text-white">
            {stage === 0 && (
                <button
                    onClick={() => setStage(1)}
                    className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                    <PlusCircle className="w-5 h-5" />
                    <span className="font-medium">Create New</span>
                </button>
            )}

            {stage === 1 && (
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-6">Create New Content</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {writingTypes.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    setSelectedType(item);
                                    setStage(2);
                                }}
                                className={`bg-white dark:bg-[#0d1117]  cursor-pointer rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700`}
                            >
                                <div className={`p-3 rounded-full bg-gradient-to-r ${getTypeColor(item.color)} shadow-md mb-3`}>
                                    {item.icon}
                                </div>
                                <p className="mt-2 text-lg font-semibold">{item.type}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    {item.type === "Blog" ? "Personal thoughts" :
                                        item.type === "Story" ? "Creative writing" :
                                            item.type === "Article" ? "Research & analysis" :
                                                "Long-form content"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {stage === 2 && (
                <div className="mt-6 mx-auto">
                    <button
                        onClick={() => setStage(1)}
                        className="flex items-center text-gray-600 dark:text-gray-300 mb-6 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 mr-1" />
                        Back to selection
                    </button>

                    <div className="bg-white dark:bg-[#0d1117]  p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                        <h1 className="text-2xl font-bold mb-4 dark:text-white">Create a new {selectedType.type.toLowerCase()}</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            A {selectedType.type.toLowerCase()} contains your written content and revision history.
                            {selectedType.type === 'Book' ? ' Organize chapters and sections.' : ' Start writing now!'}
                        </p>

                        <div className="space-y-8">
                            {/* Owner/Title Section */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="block mb-2 font-medium dark:text-gray-300">
                                        Owner <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select className="w-full p-2 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none pr-8">
                                            <option>yogesh-hack</option>
                                        </select>
                                        <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
                                    </div>
                                </div>
                                <div className="flex-4">
                                    <label className="block mb-2 font-medium dark:text-gray-300">
                                        {selectedType.type} name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        placeholder={`my-${selectedType.type.toLowerCase()}-title`}
                                    />
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                        Great {selectedType.type.toLowerCase()} names are short and memorable. Need inspiration?
                                        How about {suggestTitles(selectedType.type)}?
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block mb-2 font-medium dark:text-gray-300">Description (optional)</label>
                                <textarea
                                    className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    rows="2"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder={`Brief description of your ${selectedType.type.toLowerCase()}`}
                                />
                            </div>

                            {/* Visibility */}
                            <div>
                                <label className="block mb-3 font-medium dark:text-gray-300">Visibility</label>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <label className="flex items-start p-4 border dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                        <input type="radio" name="visibility" className="mt-1 mr-3" defaultChecked />
                                        <div>
                                            <div className="font-medium dark:text-white">Public</div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Anyone on the internet can see this {selectedType.type.toLowerCase()}. You choose who can edit.
                                            </p>
                                        </div>
                                    </label>
                                    <label className="flex items-start p-4 border dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                        <input type="radio" name="visibility" className="mt-1 mr-3" />
                                        <div>
                                            <div className="font-medium dark:text-white">Private</div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                You choose who can see and edit this {selectedType.type.toLowerCase()}.
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Initialization Options */}
                            <div className="border-t dark:border-gray-700 pt-6">
                                <h3 className="font-medium mb-3 dark:text-gray-300">Initialize this {selectedType.type.toLowerCase()} with:</h3>
                                <div className="space-y-4">
                                    <label className="flex items-start">
                                        <input type="checkbox" className="mt-1 mr-3" />
                                        <div>
                                            <div className="font-medium dark:text-white">Add a README</div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                This is where you can write a long description for your {selectedType.type.toLowerCase()}.
                                            </p>
                                        </div>
                                    </label>
                                    <label className="flex items-start">
                                        <input type="checkbox" className="mt-1 mr-3" />
                                        <div>
                                            <div className="font-medium dark:text-white">Add template files</div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {selectedType.type === 'Book' ? 'Chapter structure template' :
                                                    selectedType.type === 'Article' ? 'Research paper template' :
                                                        'Standard writing template'}
                                            </p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Footer Note */}
                            <div className="text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 pt-4">
                                You are creating a {document.querySelector('input[name="visibility"]:checked')?.value === 'private' ? 'private' : 'public'} {selectedType.type.toLowerCase()} in your personal account.
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end space-x-3 pt-4">
                                <button
                                    onClick={() => setStage(1)}
                                    className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <Link
                                    to={`/colaborate/write?type=${selectedType.type.toLowerCase()}`}
                                    className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-md hover:shadow-lg transition-all font-medium"
                                >
                                    Create {selectedType.type}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}