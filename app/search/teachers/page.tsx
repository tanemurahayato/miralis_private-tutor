import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, GraduationCap, Clock } from "lucide-react"

export default function TeachersSearch() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-8">先生を探す</h1>
        
        {/* Search Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">エリア</label>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <select className="w-full rounded border-gray-300">
                  <option>都道府県を選択</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">教科</label>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-4 w-4 text-gray-500" />
                <select className="w-full rounded border-gray-300">
                  <option>科目を選択</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">指導時間</label>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <select className="w-full rounded border-gray-300">
                  <option>時間を選択</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                検索する
              </Button>
            </div>
          </div>
        </Card>

        {/* Results */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="p-6">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">山田 太郎 先生</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    東京大学理学部卒 | 指導歴5年
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">数学</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">物理</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">化学</span>
                  </div>
                  <Button size="sm">詳細を見る</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}