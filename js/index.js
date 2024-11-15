function getInputValueById(id) {
  const value = parseFloat(document.getElementById(id).value);
  return value;
}

document
  .getElementById('donate-now-noakhali')
  .addEventListener('click', function () {
    const donateAmountNoakhali = getInputValueById('donate-amount-noakhali');

    const totalDonteNoakhali = document.getElementById('total-donate-noakhali');
    const newTotalDonatesValue =
      donateAmountNoakhali + parseFloat(totalDonteNoakhali.innerText);

    totalDonteNoakhali.innerText = newTotalDonatesValue;

    const availableStringBalance = document.getElementById('total-amount');
    const availableStringBalanceValue = availableStringBalance.innerText;

    const availableNumberBalanceValue = parseFloat(availableStringBalanceValue);

    const remainingBalance = availableNumberBalanceValue - donateAmountNoakhali;

    availableStringBalance.innerText = remainingBalance;

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border border-slate-200 rounded-lg mt-4 mb-4 ">
    <h3 class=" font-bold text-lg px-8 py-2"> ${newTotalDonatesValue}Taka is Donate for Flood at Noakhali, Bangladesh</h3>
    <p class="text-sm text-[#111111] px-8 py-1">Date:${new Date().toLocaleDateString(
      'en-GB'
    )}</p>
    </div>
    `;

    document.getElementById('history-section').appendChild(div);
  
  });

document
  .getElementById('donate-now-feni')
  .addEventListener('click', function () {
    const donateAmountFeni = getInputValueById('donate-amount-feni');
    const totalDonateFeni = document.getElementById('total-donate-feni');
    const newTotalDonateValue =
      donateAmountFeni + parseFloat(totalDonateFeni.innerText);
    totalDonateFeni.innerText = newTotalDonateValue;

    const availableStringBalance = document.getElementById('total-amount');

    const availableStringBalanceValue = availableStringBalance.innerText;
    const availableNumberBalanceValue = parseFloat(availableStringBalanceValue);
    const remainingBalance = availableNumberBalanceValue - donateAmountFeni;
    console.log(remainingBalance);
    availableStringBalance.innerText = remainingBalance;

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border border-slate-200 rounded-lg mt-4 mb-4 ">
    <h3 class=" font-bold text-lg px-8 py-2"> ${newTotalDonateValue}Taka is Donate for Flood at Feni, Bangladesh</h3>
    <p class="text-sm text-[#111111] px-8 py-1">Date:${new Date().toLocaleDateString(
      'en-GB'
    )}</p>
    </div>
    `;

    document.getElementById('history-section').appendChild(div);
 
  });
document
  .getElementById('donate-now-quota')
  .addEventListener('click', function () {
    const donateAmountQuota = getInputValueById('donate-amount-quota');
    const totalDonateQuota = document.getElementById('total-donate-quota');
    const newTotalDonateValue =
      donateAmountQuota + parseFloat(totalDonateQuota.innerText);
    totalDonateQuota.innerText = newTotalDonateValue;

    const availableStringBalance = document.getElementById('total-amount');

    const availableStringBalanceValue = availableStringBalance.innerText;
    const availableNumberBalanceValue = parseFloat(availableStringBalanceValue);
    const remainingBalance = availableNumberBalanceValue - donateAmountQuota;
    console.log(remainingBalance);
    availableStringBalance.innerText = remainingBalance;

    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border border-slate-200 rounded-lg mt-4 mb-4 ">
    <h3 class=" font-bold text-lg px-8 py-2"> ${newTotalDonateValue}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
    <p class="text-sm text-[#111111] px-8 py-1">Date:${new Date().toLocaleDateString(
      'en-GB'
    )}</p>
    </div>
    `;

    document.getElementById('history-section').appendChild(div);
   
  });

// history function
const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-button');

historyBtn.addEventListener('click', function () {
  document.getElementById('history-section').classList.remove('hidden');
  document.getElementById('card-container').classList.add('hidden');

  historyBtn.classList.remove('bg-gray-200', 'text-[#CACACA]');
  historyBtn.classList.add('bg-[#B4F461]');
  donationBtn.classList.add('text-[#CACACA]', 'border-2');
  donationBtn.classList.remove('bg-[#B4F461]');
});

donationBtn.addEventListener('click', function () {
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById('card-container').classList.remove('hidden');

  historyBtn.classList.remove('bg-[#B4F461]');
  historyBtn.classList.add('text-[#CACACA]');
  donationBtn.classList.add('bg-[#B4F461]');
  donationBtn.classList.remove('text-[#CACACA]');
});
