import React from "react";
import {Helmet} from 'react-helmet';
import Typekit from 'typekit';
class MyScript extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <script src="./line_chart.js"></script>
				<script>try{Typekit.load({ async: true })}catch(e){}</script>
            </Helmet>
        </div>
    );
  }
};

export default MyScript;
