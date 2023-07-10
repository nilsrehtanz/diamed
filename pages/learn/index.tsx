import Link from "next/link";
import SymptomsArticle from "../../components/learn/articles/SymptomsArticle";

export default function LearnPage() {
  return (
    <div>
      <Link href="/learn/symptoms">Symptoms</Link>
      <Link href="/learn/treatments">Treatments</Link>
      <Link href="/learn/quantum">Quantum</Link>
    </div>
  );
}
