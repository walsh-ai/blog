import getLocalData from '../lib/localdata'; 
import utilStyles from '../styles/utils.module.css'; 

export default function Quote({ content, attribution }) {
    return (
        <div>
            <h2>{content}</h2>
            <h3>--{attribution}</h3>
        </div>
    );
}

export async function getServerSideProps(context) {
    // Get the JSON data 
    const filename = "quotes"; 
    const jsonData = await getLocalData(filename); 

    const { _content, _attribution } = jsonData[5]; 

    return {
      props: {
        content: _content.toString(), 
        attribution: _attribution.toString(), 
      },
    };
  }
  