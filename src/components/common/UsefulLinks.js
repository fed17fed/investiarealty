import Link from "next/link";

const UsefulLinks = () => {
  
    return (
      <>        
            <div className="usefullinks_btnblock">
                <Link href="#" className="usefullinks_item">
                    Партнерам                  
                </Link> 
                <Link href="#" className="usefullinks_item">
                    Инвесторам
                </Link> 
                <Link href="#" className="usefullinks_item">
                    Застройщикам
                </Link> 
                <Link href="#" className="usefullinks_item">
                    Вакансии
                </Link> 
            </div>
      </>
    );
  };
  
  export default UsefulLinks;
  