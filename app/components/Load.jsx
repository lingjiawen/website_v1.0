import React from 'react'


class Load extends React.Component {
    render() {
        return (
            <table className="doc-loader">
                <tr>
                    <td>
                        <img src={require("../../images/doc_loader/loading.gif")} alt="loading..."/>
                    </td>
                </tr>
            </table>
        );
    }
}

export default Load