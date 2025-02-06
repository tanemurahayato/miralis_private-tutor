"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCap, ArrowRight, ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formType, setFormType] = useState("teacher")
  const [formData, setFormData] = useState({
    // 基本情報
    name: "",
    nameKana: "",
    gender: "",
    birthDate: "",
    email: "",
    postalCode: "",
    address: "",
    // 教育・経験
    currentOccupation: "",
    education: "",
    schoolYear: "",
    highSchool: "",
    juniorHighSchool: "",
    hasJukuExperience: false,
    qualifications: "",
    // 指導条件
    desiredHourlyRate: "",
    teachingExperience: [],
    subjects: [],
    transportation: "",
    commutingRoute: "",
    selfPR: "",
    // 生徒用追加フィールド
    desiredTeacherGender: "",
    currentGrade: "",
    desiredSubjects: [],
    subjectLevels: {},
    desiredStartDate: "",
    desiredDays: [],
    desiredFrequency: "",
    targetSchool: "",
    currentGrades: "",
    requests: "",
    specialNotes: ""
  })

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4))
  }

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Firebaseへのデータ送信処理
    console.log(formData)
  }

  const renderTeacherStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">基本情報</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">氏名</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="山田 太郎"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nameKana">氏名（ふりがな）</Label>
                <Input
                  id="nameKana"
                  value={formData.nameKana}
                  onChange={(e) => setFormData({...formData, nameKana: e.target.value})}
                  placeholder="やまだ たろう"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>性別</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData({...formData, gender: value})}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">男性</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">女性</Label>
                </div>
              </RadioGroup>
            </div>
            {/* 他の基本情報フィールド */}
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">教育・経験</h3>
            <div className="space-y-2">
              <Label htmlFor="education">最終学歴</Label>
              <Select
                value={formData.education}
                onValueChange={(value) => setFormData({...formData, education: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="university">大学</SelectItem>
                  <SelectItem value="graduate">大学院</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* 他の教育・経験フィールド */}
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">希望条件</h3>
            <div className="space-y-2">
              <Label htmlFor="desiredHourlyRate">希望時給</Label>
              <Input
                id="desiredHourlyRate"
                type="number"
                value={formData.desiredHourlyRate}
                onChange={(e) => setFormData({...formData, desiredHourlyRate: e.target.value})}
                placeholder="例: 3000"
              />
            </div>
            {/* 他の希望条件フィールド */}
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">確認</h3>
            {/* 入力内容の確認表示 */}
          </div>
        )
    }
  }

  const renderStudentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">基本情報</h3>
            {/* 生徒用の基本情報フィールド */}
          </div>
        )
      // 他のステップも同様に実装
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">新規登録</h1>
        
        <Card className="max-w-3xl mx-auto p-6">
          <Tabs value={formType} onValueChange={setFormType} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="teacher" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                先生として登録
              </TabsTrigger>
              <TabsTrigger value="student" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                生徒として登録
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="teacher">
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderTeacherStep()}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={handlePrev}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      前へ
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button type="button" className="ml-auto bg-orange-600 hover:bg-orange-700" onClick={handleNext}>
                      次へ
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto bg-orange-600 hover:bg-orange-700">
                      登録する
                    </Button>
                  )}
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="student">
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderStudentStep()}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={handlePrev}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      前へ
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button type="button" className="ml-auto bg-orange-600 hover:bg-orange-700" onClick={handleNext}>
                      次へ
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto bg-orange-600 hover:bg-orange-700">
                      登録する
                    </Button>
                  )}
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </main>
  )
}