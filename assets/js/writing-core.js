/**
 * writing-core.js
 * Core logic for Reading & Writing Corner Vokasi+
 */

const WritingCore = {
    // defined tasks
    tasks: [
        {
            id: 'pantun-profesi',
            title: 'Pantun Profesi',
            category: 'Budaya Lokal',
            difficulty: 'Easy',
            description: 'Buatlah 2 bait pantun yang bertema profesi jurusanmu (misal: TKJ, Perhotelan, Akuntansi).',
            prompt: 'Contoh:\nBurung dara terbang melayang,\nHinggap sebentar di pohon jati.\nKalau ingin masa depan gemilang,\nBelajar coding sepenuh hati.'
        },
        {
            id: 'gurindam-kerja',
            title: 'Gurindam Etos Kerja',
            category: 'Budaya Lokal',
            difficulty: 'Medium',
            description: 'Tuliskan satu pasal Gurindam tentang pentingnya disiplin da jujur dalam bekerja.',
            prompt: 'Barang siapa khianat janji,\nNama baik pun akan teruji.'
        },
        {
            id: 'local-legend-summary',
            title: 'Ringkasan Legenda',
            category: 'Literasi',
            difficulty: 'Hard',
            description: 'Pilih satu cerita rakyat Kepulauan Riau (misal: Yong Dolah atau Pulau Penyengat), lalu tuliskan ringkasannya dalam 100-150 kata menggunakan Bahasa Indonesia yang baik.',
            prompt: 'Mulailah dengan mengenalkan tokoh utama dan konflik yang dihadapi...'
        },
        {
            id: 'opini-budaya',
            title: 'Opini: Melestarikan Budaya',
            category: 'Critical Thinking',
            difficulty: 'Hard',
            description: 'Bagaimana cara anak muda SMK bisa melestarikan budaya Melayu di era digital? Tuliskan pendapatmu.',
            prompt: 'Saya berpendapat bahwa teknologi bisa menjadi sarana pelestarian budaya...'
        }
    ],

    // Get all tasks
    getTasks: function () {
        return this.tasks;
    },

    // Get specific task
    getTask: function (id) {
        return this.tasks.find(t => t.id === id);
    },

    // Save draft to local storage
    saveDraft: function (taskId, content) {
        try {
            const data = {
                taskId: taskId,
                content: content,
                lastSaved: new Date().toISOString()
            };
            localStorage.setItem(`writing_draft_${taskId}`, JSON.stringify(data));
            return { success: true, timestamp: new Date() };
        } catch (e) {
            console.error("Save failed", e);
            return { success: false, error: e };
        }
    },

    // Load draft
    getDraft: function (taskId) {
        const item = localStorage.getItem(`writing_draft_${taskId}`);
        return item ? JSON.parse(item) : null;
    },

    // Export to text file
    exportToTxt: function (taskId, content) {
        const task = this.getTask(taskId);
        const title = task ? task.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'writing_task';
        const filename = `${title}_${new Date().toISOString().slice(0, 10)}.txt`;

        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
