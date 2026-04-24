import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
      <div className="space-y-4 text-gray-700">
        <div className="bg-gray-50 rounded-lg p-6 space-y-3">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:2115199@dlu.edu.vn"
              className="text-violet-600 hover:underline"
            >
              2115199@dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/2115199-CNMATK4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline"
            >
              github.com/2115199-CNMATK4/
            </a>
          </p>
          <p>
            <strong>Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên Vương,
            Đà Lạt
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Gửi tin nhắn</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên</Label>
              <Input id="name" type="text" placeholder="Nhập họ và tên" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Nhập email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Nội dung</Label>
              <Textarea
                id="message"
                placeholder="Nhập nội dung tin nhắn"
                rows={4}
              />
            </div>

            <Button type="submit">Gửi tin nhắn</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
