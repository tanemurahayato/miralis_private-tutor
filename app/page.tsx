import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, GraduationCap, Clock } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto relative z-10 text-white px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              家庭教師のミラリスで<br />理想の先生を見つけよう
            </h1>
            <p className="text-lg mb-8 opacity-90">
              全国の優秀な家庭教師があなたの学習をサポート。
              オンライン指導にも対応しています。
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-600 text-sm font-medium">エリア</label>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <MapPin className="h-4 w-4" />
                    <select className="w-full rounded border-gray-300 focus:border-orange-500">
                      <option>都道府県を選択</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-gray-600 text-sm font-medium">教科</label>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <GraduationCap className="h-4 w-4" />
                    <select className="w-full rounded border-gray-300 focus:border-orange-500">
                      <option>科目を選択</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-gray-600 text-sm font-medium">指導時間</label>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Clock className="h-4 w-4" />
                    <select className="w-full rounded border-gray-300 focus:border-orange-500">
                      <option>時間を選択</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-end">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700" size="lg">
                    <Search className="mr-2 h-4 w-4" />
                    検索する
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">ミラリスが選ばれる理由</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-orange-500">
              <CardContent className="pt-6">
                <div className="text-orange-600 mb-4">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21l-8.5-8.5a7 7 0 1 1 9.9-9.9 7 7 0 1 1 9.9 9.9L12 21z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">厳選された講師陣</h3>
                <p className="text-gray-600">
                  書類審査・面接を通過した優秀な講師のみが登録しています。
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-orange-500">
              <CardContent className="pt-6">
                <div className="text-orange-600 mb-4">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">充実のサポート体制</h3>
                <p className="text-gray-600">
                  専任スタッフが学習プランの相談から進路指導まで徹底サポート。
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-orange-500">
              <CardContent className="pt-6">
                <div className="text-orange-600 mb-4">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">安心の料金体系</h3>
                <p className="text-gray-600">
                  明確な料金設定で、追加料金や入会金は一切ありません。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 text-gray-600 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-900">家庭教師のミラリス</h4>
              <p className="text-sm">
                確かな指導力と豊富な経験を持つ家庭教師が、あなたの学習をサポートします。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-900">メニュー</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/search/teachers" className="hover:text-orange-600">先生を探す</Link></li>
                <li><Link href="/search/students" className="hover:text-orange-600">生徒を探す</Link></li>
                <li><Link href="/register" className="hover:text-orange-600">新規登録</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-900">サポート</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/faq" className="hover:text-orange-600">よくある質問</Link></li>
                <li><Link href="/contact" className="hover:text-orange-600">お問い合わせ</Link></li>
                <li><Link href="/about" className="hover:text-orange-600">会社概要</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-gray-900">お問い合わせ</h4>
              <p className="text-sm mb-2">受付時間: 9:00〜21:00</p>
              <p className="text-lg font-bold text-orange-600">0120-XXX-XXX</p>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 家庭教師のミラリス All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}