import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import {
  Server,
  Asset,
  TransactionBuilder,
  Networks,
  Operation,
  Keypair,
  BASE_FEE
} from 'stellar-sdk';

function DepositeAssets({sourceSecretkey, create}) {
  const [destinationPublicKey, setDestinationPublicKey] = useState("GCG5HKJF2VGCUZK3LMH3UT7PSV2AQC2BR7CHERAI2GT4PMHAT3ATPISP");
  const [amount, setAmount] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function depositAssets() {
    setIsLoading(true);
    try {
      const server = new Server('https://horizon-testnet.stellar.org');
      const account = await server.loadAccount(destinationPublicKey);

      // Create the transaction
      const transaction = new TransactionBuilder(account, {
        fee:BASE_FEE,
        networkPassphrase: Networks.TESTNET,
      })
        .addOperation(
          Operation.payment({
            destination: destinationPublicKey,
            asset: Asset.native(),
            amount: amount,
          }),
        )
        .setTimeout(180)
        .build();

      // Sign the transaction with the account's secret key
      transaction.sign(Keypair.fromSecret(sourceSecretkey));

      // Submit the transaction to the network
      const response = server.submitTransaction(transaction);
      console.log(response);
      alert('Fund transfer successfully');
      setDestinationPublicKey('');
      setAmount('');
      setError('');
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View>
      {create === false ? (
        <View></View>
      ) : (
        <View>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
            }}
            placeholder="Destination Public Key"
            value={destinationPublicKey}
            onChange={e => setDestinationPublicKey(e.target.value)}
          />

          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
            }}
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />

          <TouchableOpacity onPress={depositAssets} activeOpacity={0.8}>
            <Text
              style={{
                backgroundColor: 'blue',
                width: '95%',
                height: 40,
                fontSize: 20,
                textAlign: 'center',
                textAlignVertical: 'center',
                alignSelf: 'center',
                borderRadius: 5,
                color: 'white',
                marginTop: 15,
              }}>
              {isLoading === true ? 'Depositing Funds...' : 'Deposite'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
       
       <View style={{marginTop:15,marginLeft:12}}>
       {error && <Text style={{color: 'red'}}>{error.message}</Text>}
       </View>
     
     
    </View>
  );
}

export default DepositeAssets;
